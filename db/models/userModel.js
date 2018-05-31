const Orm = require('../orm.js')

const UserModel = {
    googleUser(data) {
      let user = {
          firstName: data.w3.ofa,
          lastName: data.w3.wea,
          email: data.w3.U3,
          accessToken: data.Zi.access_token
      }
      Orm.hasUserAcount(user)
    },

    facebookUser (data) {
      let user = {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        accessToken: data.accessToken
      }
      Orm.hasUserAcount(user)
    },

    auth (cookie) {
      return Orm.checkCookie(cookie)
    },

    getInfo (cookie) {
      return Orm.getInfo(cookie)
    },

    logout (cookie) {
      return Orm.logoutUser(cookie)
    },

    deleteAccount (cookie) {
      return Orm.deleteUserAcount(cookie)
    }
}


module.exports = UserModel