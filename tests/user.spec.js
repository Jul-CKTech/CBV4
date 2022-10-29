import UsersHelper from "../helpers/users.helper";
import {expect} from "chai";

describe('users', function () {
  describe('user creation', function () {
    let usersHelper = new UsersHelper()

    before(async function(){
      await usersHelper.create()
    })

    it('response status code is 201', function () {
      expect(usersHelper.response.status).to.eq(201)
    })

    it('response body contains the message', function () {
      expect(usersHelper.response.body.message).to.eq('User created successfully. Please check your email and verify it')
    })
  })

  describe('User creation with invalid credential', function () {
    let usersHelper = new UsersHelper()

    before(async function () {
      await usersHelper.createNegative()
    })

    it('response status code is 404 when missing data', function () {
      expect(usersHelper.response.status).to.eq(404)
    })

    it('response message when register an existing user', function () {
      expect(usersHelper.response.body.message).to.eq('User was not created')
    })
  })

  describe('User creation with existing credential', function () {
    let usersHelper = new UsersHelper()

    before(async function () {
      await usersHelper.create()
    })

    it('response status code is 409 when register an existing user', function () {
      expect(usersHelper.response.status).to.eq(409)
    })

    it('response message when register an existing user', function () {
      expect(usersHelper.response.body.message).to.eq('User with this e-mail exists')
    })
  })

  describe.only('Search email for verification', function () {
    let usersHelper = new UsersHelper()

    before(async function () {
      await usersHelper.search()
    })

    it('response status code is 200', function () {
      expect(usersHelper.response.status).to.eq(200)
    })

    it('response message in search email', function () {
      expect(usersHelper.response.body.message).to.eq('EmailSearch ok')
    })
  })
})