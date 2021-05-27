import React, { Component } from "react";

class NavbarButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }
  render() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
    return (
      <div>
        <div className="rounded-full h-16 w-16 flex items-center justify-center bg-green-200 mt-8 mr-6 " onClick={handleClick}></div>
      </div>
    );
  }
}

export default NavbarButton;
