import React from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';

class AllBreweries extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: null,
          isLoaded: false,
          items: []
      };
  }

//   componentDidMount() {
//     fetch('/api/get_breweries', {
//         method: 'GET',
//     })
//     .then((res) => {return res.json()})
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result
//           });
//         },
        
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

  render() {
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
      return (
        <div className="container" id="breweriesWrapper">
            <p>Nothing right now</p>
        </div>
      )
    //}

  }
}

export default AllBreweries;