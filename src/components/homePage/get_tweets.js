import React from 'react';

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
          console.log(result)
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
        <div class="container">
          <div class="row">
            <div class="col-sm">
        {items.map((item, index) => {
            return(
              <div class="card">
                <div class="card-header">
                @{item.Account}
                </div>
                <div class="card-body">
                  <h5 class="card-title">{item.Name}</h5>
                  <p class="card-text">{item.Text}</p>
                </div>
              </div>
            )
        })}
            </div>
          </div>
        </div>
      )
    }

  }
}

export default GetTweets