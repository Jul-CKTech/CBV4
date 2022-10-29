import {expect} from 'chai'
import AuthHelper from "../helpers/auth.helper"

describe('Auth', function () {
    describe('Successful log in', function () {
        let authHelper = new AuthHelper()

        before(async function () {
            await authHelper.logIn(process.env.EMAIL, process.env.PASSWORD)
        })
        it('response status code 200',  function () {
            expect(authHelper.response.status).to.eq(200)
        })

        it('response body contains authorization token',  function () {
            expect(authHelper.response.body.payload.token).not.to.be.undefined
        })
    })

    describe('Log in with invalid credentials', function () {
        let authHelper = new AuthHelper()

        before(async function () {
            await authHelper.logIn('invalid', 'invalid')
        })
        it('response status code 400',  function () {
            expect(authHelper.response.status).to.eq(400)
        })

        it('response body contains message',  function () {
            expect(authHelper.response.body.message).to.eq('Auth failed')
        })
    })

    describe('Get user information', function () {
        let authHelper = new AuthHelper()
        let users

        before(async function () {
            await authHelper.logIn()
            users = await authHelper.response.body
            await authHelper.get(users.payload)
        })

        it('response status code is 200', function () {
            expect(authHelper.response.status).to.eq(200)
        })

        it('response message when get user information', function () {
            expect(authHelper.response.body.message).to.eq("User found")
        })

        it('response contains the message with users role is verified', function () {
            expect(authHelper.response.body.payload).to.eq(users.payload.verified)
        })

        it('response body contains user Id', function () {
            expect(authHelper.response.body.payload).to.eq(users.payload._id)
        })
    })
})