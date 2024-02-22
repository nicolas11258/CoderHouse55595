import { createHash, passwordValidation } from '../src/utils/index.js'
import chai from 'chai'

const expect = chai.expect

describe('Testear la utilidad de bcrypt', () => {
  const mockUser = {
    first_name: 'Nick',
    last_name: 'Agu',
    email: 'nick@agu.com',
    password: 'nick123',
  }

  it('Verificar el haseo efectivo, con contraseña diferente a la contraseña original', async function () {
    const result = await createHash(mockUser.password)
    console.log('🚀 ~ file: bcrypt.test.js:16 ~ result:', result)

    expect(result).is.not.equal(mockUser.password)
  })
})
