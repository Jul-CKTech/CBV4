import supertest from 'supertest'

export default class AuthHelper {
    response

    async logIn(email, password){
         this.response = await supertest(process.env.BASE_URL)
            .post('/v4/user/login')
            .send({email: email, password: password})
        return this.response
    }
}