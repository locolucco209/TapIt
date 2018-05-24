const connection = require('./connection.js')
connection.connect()

const Orm = {

    hasUserAcount(user) {
          connection.query('SELECT email FROM user_accounts;', function (error, results, fields){
            if (error) {console.log(error)}
            let temp = JSON.parse(JSON.stringify(results))
            console.log(temp)
            // results.find((element) => {
            //     if (element === user.email){
            //         console.log("Looks like you already have an account")
            //         //Orm.loginUser(user)
            //     } else {

            //         Orm.newUser(user)
            //     }
            // })
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

    loginUser(req) {
        // return new Promise((resolve, reject) => {
        //   connection.query('SELECT * FROM burgers', function (error, results, fields){
        //     if (error) {
        //       reject(error)
        //     } else {
        //       resolve(results)
        //     }
        //   })
        // })
    },

    logoutUser(req) {
        // return new Promise((resolve, reject) => {
        //   connection.query('SELECT * FROM burgers', function (error, results, fields){
        //     if (error) {
        //       reject(error)
        //     } else {
        //       resolve(results)
        //     }
        //   })
        // })
    },

    deleteUserAcount() {
        // return new Promise((resolve, reject) => {
        //   connection.query('SELECT * FROM user_accounts WHERE ', function (error, results, fields){
        //     if (error) {
        //       reject(error)
        //     } else {
        //       resolve(results)
        //     }
        //   })
        // })
    },

}

module.exports = Orm