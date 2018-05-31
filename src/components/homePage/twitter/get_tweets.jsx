import React from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';

class GetTweets extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: null,
          isLoaded: false,
          items: []
      };
  }

  componentDidMount() {
    fetch('/api/get_tweets', {
        method: 'GET',
    })
    .then((res) => {return res.json()})
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container" id="tweetWrapper">
          <div className="row">
            <div className="col-sm">
        {
          items.map((item, index) => {
            return(
              <div className="tweets">
                <TwitterTweetEmbed
                  tweetId={item.id}
                />
              </div>
            )
          })
        }
            </div>
          </div>
        </div>
      )
    }

  }
}

export default GetTweets