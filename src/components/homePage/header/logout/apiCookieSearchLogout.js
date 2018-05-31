import axios from 'axios'

const checkCookie = (cookie) => {

  return new Promise((resolve, reject) => {

    let dbCookie

      axios.post('/logout', {
        data: {cookie}
      })
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        console.log(error);
        reject(error)
      });

  })

}

export default checkCookie;