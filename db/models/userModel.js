const Orm = require('../orm.js')

const UserModel = {
    googleUser(data) {
      let firstName = data.w3.ofa
      let lastName = data.w3.wea
      let email = data.w3.U3
      let accessToken = data.Zi.access_token
      console.log(firstName)
      console.log(lastName)
      console.log(email)
      console.log(accessToken)
      console.log('USERMODEL GOOGLE')
    },

    facebookUser (data) {
      let firstName = data.first_name
      let lastName = data.last_name
      let email = data.email
      let accessToken = data.accessToken
      console.log(firstName)
      console.log(lastName)
      console.log(email)
      console.log(accessToken)
      console.log('USERMODEL FACEBOOK')
    }
}

module.exports = UserModel