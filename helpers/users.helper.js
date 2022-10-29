import supertest from "supertest"

export default class UsersHelper {
    response

    async create (){
        this.response = await supertest(process.env.BASE_URL)
            .post('/v4/user')
            .send({"email": "brn@summers.com", "firstName": "Bryan", "lastName": "Summers", "password": "1234rewQ"})
        return this.response
    }

    async createNegative (){
        this.response = await supertest(process.env.BASE_URL)
            .post('/v4/user')
            .send({"email": "", "firstName": "Bryan", "lastName": "Summers", "password": "1234rewQ"})
        return this.response
    }
    async search(){
        this.response = await supertest(process.env.BASE_URL)
            .post('email/search')
            .send({"email": "brn@summers.com"})
    }
}