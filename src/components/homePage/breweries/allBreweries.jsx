import React from 'react';

class AllBreweries extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: null,
          isLoaded: false,
          items: []
      };
  }

  componentDidMount() {
    fetch('/api/get_breweries', {
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
        <div className="container" id="breweryWrapper">
          <div className="row">
            <div className="col-sm">
                  {
                    items.map((item, index) => {
                      return(
                        <div className='card breweries'>
                          <div className='card-body'>
                            <h3>{item.name}</h3>
                            <hr/>
                            <p>{item.street_address}</p>
                            <p>{item.city}, {item.zip}</p>
                          </div>
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

export default AllBreweries;