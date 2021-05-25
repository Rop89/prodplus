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
    return (
      <div>
        <div className="rounded-full h-16 w-16 flex items-center justify-center bg-green-200 mt-8 mr-6 "></div>
      </div>
    );
  }
}

export default NavbarButton;
