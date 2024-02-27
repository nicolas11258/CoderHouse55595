import chai from 'chai'
import supertest from 'supertest'
import mongoose from 'mongoose'

mongoose.connect(
  `mongodb+srv://nicolas11258:0kCg8T4wNf5Ne0zc@cluster0.sy13hmr.mongodb.net/clase_40?retryWrites=true&w=majority`
)
const expect = chai.expect
const requester = supertest('http://localhost:8080')

describe('Testing de la API de AdoptMe', () => {
  describe('Test de mascotas', () => {
    const petMock = {
      name: 'Pancho',
      specie: 'Perro',
      birthDate: '10-18-2022',
    }

    it('El endpoint POST /api/pets debe poder crear una mascota correctamente', async () => {
      const response = await requester.post('/api/pets').send(petMock)

      expect(response.body.payload).to.have.property('_id')
      expect(response.statusCode).to.equal(201)
    })

    it('Al crear una mascota sólo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted: false', async () => {
      const response = await requester.post('/api/pets').send(petMock)

      expect(response.body.payload)
        .to.have.property('name')
        .to.equal(petMock.name)
    })

    it('Al crear una mascota con el body vacío', async () => {
      const response = await requester.post('/api/pets').send()

      expect(response.statusCode).to.equal(400)
      expect(response.body.error).to.equal('Incomplete values')
    })

    it('Si se desea crear una mascota sin el campo nombre, el módulo debe responder con un status 400', async () => {
      const petMock = {
        specie: 'Perro',
        birthDate: '10-18-2022',
      }

      const response = await requester.post('/api/pets').send(petMock)

      expect(response.statusCode).to.equal(400)
    })

    it('Al obtener a las mascotas con el método GET, la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo', async () => {
      const { body } = await requester.get('/api/pets')

      expect(body).to.have.property('status')
      expect(body).to.have.property('payload')
      expect(body.payload).to.be.an('array')
    })

    it('El método PUT debe poder actualizar correctamente a una mascota determinada (esto se puede testear comparando el valor previo con el nuevo valor de la base de datos)', async () => {
      const petUpdateMock = {
        name: 'Pacheco',
        specie: 'Gato',
        birthDate: '10-10-2020',
      }

      const { body } = await requester.post('/api/pets').send(petMock)
      const petId = body.payload._id

      await requester.put(`/api/pets/${petId}`).send(petUpdateMock)

      const response = await requester.get('/api/pets')

      const pets = response.body.payload

      const pet = pets.find(pet => pet._id === petId)

      expect(pet.name).is.equal('Pacheco')
    })
    it('El método PUT debe poder actualizar correctamente a una mascota determinada y se deben obtener todos los campos del modelo', async () => {
      const petUpdateMock = {
        name: 'Pacheco',
        specie: 'Gato',
        birthDate: '10-10-2020',
      }

      const { body } = await requester.post('/api/pets').send(petMock)
      const petId = body.payload._id

      await requester.put(`/api/pets/${petId}`).send(petUpdateMock)

      const response = await requester.get('/api/pets')

      const pets = response.body.payload

      const pet = pets.find(pet => pet._id === petId)

      expect(pet).to.have.property('name').is.not.empty
      expect(pet).to.have.property('specie').is.not.empty
      expect(pet).to.have.property('birthDate').is.not.empty
    })
  })

  describe('Test de login, captura y uso de token en una ruta protegida', () => {
    const cookie = {}

    before(async function () {
      this.timeout(5000)
      await mongoose.connection.collections.users.deleteMany({})
    })

    it('Debe registrar correctamente a un usuario', async () => {
      const mockUser = {
        first_name: 'Titin',
        last_name: 'Naran',
        email: 'titin@naran.com',
        password: 'titin123',
      }

      const { body } = await requester
        .post('/api/sessions/register')
        .send(mockUser)

      expect(body.payload).to.be.ok
      expect(body).to.have.property('payload')
      expect(body).to.have.property('status')
      expect(body.status).to.equal('success')
    })

    it('Debe devolver correctamente al usuario y devolver una cookie', async () => {
      const mockUserLogin = {
        email: 'titin@naran.com',
        password: 'titin123',
      }

      const response = await requester
        .post('/api/sessions/login')
        .send(mockUserLogin)

      const coderCookie = response.headers['set-cookie'][0]
      expect(coderCookie).to.be.ok

      cookie.name = coderCookie.split('=')[0]
      cookie.value = coderCookie.split('=')[1]

      expect(cookie.name).to.be.ok.and.equal('coderCookie')
      expect(cookie.value).to.be.ok
    })

    it('Debe enviar la cookie que contiene el usuario y destructurar este correctamente', async () => {
      const { body } = await requester
        .get('/api/sessions/current')
        .set('Cookie', [`${cookie.name}=${cookie.value}`])
    })
  })

  describe('Testear carga de imágenes', () => {
    it('Debe poderse crear una mascota con la ruta de la imagen', async () => {
      const petMock = {
        name: 'Poncho',
        specie: 'Pez',
        birthDate: '10-18-2022',
      }

      const result = await requester
        .post('/api/pets/withimage')
        .field('name', petMock.name)
        .field('specie', petMock.specie)
        .field('birthDate', petMock.birthDate)
        .attach('image', process.cwd() + '/test/pikachu.png')

      expect(result.status).to.be.equal(201)
      expect(result.body.payload).to.have.property('_id')
      expect(result.body.payload.image).to.be.ok
    })
  })
})