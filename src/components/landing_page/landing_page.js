import React from 'react';
import Add_user_btn from './buttons/add_user_btn';
import Claim_brewer_btn from './buttons/claim_brewery_btn'
import './index.css';

class Landing_page extends React.Component {
  render() {
    return(
      <div className='main'>
        <h1>Landing Page</h1>
          <div className='container'>

            <div className='row'>

              <div className='col-sm'>
                <Add_user_btn />
              </div>

              <div className="col-sm">
                <Claim_brewer_btn />
              </div>

            </div>
          </div>
      </div>
    );
  };
};

export default Landing_page;