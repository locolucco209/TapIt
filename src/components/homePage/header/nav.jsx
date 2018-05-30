import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

   
  render() {
    return(
      <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Logout</a>
        <a class="dropdown-item" href="#">Delete Account</a>
      </div>
    </div>
    );
  };
};

export default Nav;