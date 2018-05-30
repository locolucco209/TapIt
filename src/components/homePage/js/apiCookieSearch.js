import axios from 'axios'

const checkCookie = (cookie) => {

  return new Promise((resolve, reject) => {

    let dbCookie

      axios.post('/user_auth', {
        data: {cookie}
      })
      .then(function (response) {
        dbCookie = response.data
        resolve(dbCookie)
      })
      .catch(function (error) {
        console.log(error);
        reject(error)
      });

  })

}

export default checkCookie;