import axios from 'axios'

const addGoogleUser = (response) => {

    axios.post('/api/sign_up', {
        data: {response}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export default addGoogleUser