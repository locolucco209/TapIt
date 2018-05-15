import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Add_user_btn extends React.Component {
  render() {
    return(
      <div>
        <button type="button" class="btn btn-lg"><Link to="/add_user">Add User</Link></button> 
      </div>
    );
  };
};

export default Add_user_btn;
