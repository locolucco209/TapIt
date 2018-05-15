import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Claim_brewery_btn extends React.Component {
  render() {
    return(
      <div>
        <button type="button" class="btn btn-lg"><Link to="/claim_brewery">Claim Brewery</Link></button> 
      </div>
    )
  }
}

export default Claim_brewery_btn;