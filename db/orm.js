const connection = require('./connection.js')
connection.connect()

const Orm = {

    hasUserAcount(user) {
          connection.query('SELECT email FROM user_accounts;', function (error, results, fields){
            if (error) {console.log(error)}
            allEmailAddresses = []
            results.map((item, index) => {
                allEmailAddresses.push(results[index].email)
            })

            switch(allEmailAddresses.includes(user.email)) {
                case true:
                    Orm.loginUser(user)
                    break;
                case false:
                    Orm.newUser(user)
                    break;
                default:
                    console.log('Whoops... Something broke..')
            }
            
        })
    },
    
    newUser(user) {
        return new Promise((resolve, reject) => {
          connection.query(`INSERT INTO user_accounts (first_name, last_name, email, access_token) VALUES (${connection.escape(user.firstName)}, ${connection.escape(user.lastName)}, ${connection.escape(user.email)}, ${connection.escape(user.accessToken)});`, function (error, results, fields){
            if (error) {
              reject(error)
            } else {
              resolve(results)
            }
          })
        })
    },

    loginUser(user) {
        return new Promise((resolve, reject) => {
          connection.query(`UPDATE user_accounts SET access_token=${connection.escape(user.accessToken)} WHERE email=${connection.escape(user.email)};`, function (error, results, fields){
            if (error) {
              reject(error)
            } else {
              resolve(results)
            }
          })
        })
    },

    checkCookie(cookie) {
        return new Promise((resolve, reject) => {
          connection.query(`SELECT * FROM user_accounts WHERE access_token=${connection.escape(cookie)}`, function (error, results, fields){
            if (error) {
              reject(error)
            } else {
                switch(results[0]){
                    case undefined :
                        resolve(false)
                      break;
                    default:
                        resolve(true)
                }
            }
          })
        })
    },

    getInfo(cookie) {
      return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM user_accounts WHERE access_token=${connection.escape(cookie)}`, function (error, results, fields){
          if (error) {
            reject(error)
          } else {
              switch(results[0]){
                  case undefined :
                    results = false
                      resolve(results)
                    break;
                  default:
                      resolve(results[0].first_name)
              }
          }
        })
      })
  },

    logoutUser(cookie) {
        return new Promise((resolve, reject) => {
          connection.query(`UPDATE user_accounts SET access_token='' WHERE access_token=${connection.escape(cookie)};`, function (error, results, fields){
            if (error) {
              reject(error)
            } else {
              resolve(results)
            }
          })
        })
    },


    deleteUserAcount(cookie) {
        return new Promise((resolve, reject) => {
          connection.query(`DELETE FROM user_accounts WHERE access_token=${connection.escape(cookie)};`, function (error, results, fields){
            if (error) {
              reject(error)
            } else {
              resolve(results)
            }
          })
        })
    },

}

module.exports = Orm