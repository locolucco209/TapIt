import axios from 'axios'

const addFbUser = (response) => {

    axios.post('/api/sign_up_Fb', {
        data: {response}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export default addFbUser