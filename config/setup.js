import 'dotenv/config'
import AuthHelper from "../helpers/auth.helper"

before(async function(){
    const authHelper = new AuthHelper()
       await authHelper.logIn(process.env.EMAIL, process.env.PASSWORD)
    process.env['TOKEN'] = authHelper.response.body.payload.token
})