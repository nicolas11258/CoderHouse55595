import mongoose from 'mongoose'
import Users from '../src/dao/Users.dao.js'
import chai from 'chai'

mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.vqo1vyi.mongodb.net/?retryWrites=true&w=majority`
)

const expect = chai.expect

describe('Testear DAO de usuario con CHAI', () => {
  before(function () {
    this.Users = new Users()
  })

  beforeEach(async function () {
    this.timeout(5000)
    await mongoose.connection.collections.users.deleteMany({})
  })

  const mockUser = {
    first_name: 'Nick',
    last_name: 'Agu',
    email: 'nick@agu.com',
    password: 'nick123',
  }

  it('El DAO debe poder obtener los usuarios en formato de arreglo', async function () {
    const result = await this.Users.get()

    expect(result).to.be.deep.equal([])
  })

  it('El DAO debe agregar un usuario correctamente a la base de datos', async function () {
    const result = await this.Users.save(mockUser)

    expect(result).to.have.property('_id')
  })

  it('El Dao agregará al documento insertado un arreglo de mascotas vacio por defecto', async function () {
    const result = await this.Users.save(mockUser)

    expect(result).to.be.have.property('pets').to.be.an('array').that.is.empty
  })

  it('El Dao puede obtener a un usuario por email', async function () {
    const result = await this.Users.save(mockUser)

    const user = await this.Users.getBy({ email: result.email })

    expect(user).to.have.property('email')
  })
})
