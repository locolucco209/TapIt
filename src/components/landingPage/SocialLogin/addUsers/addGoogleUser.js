import axios from 'axios'

const addGoogleUser = (response) => {
  
    axios.post('/api/sign_up_Go', {
        data: {response}
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

}

export default addGoogleUser