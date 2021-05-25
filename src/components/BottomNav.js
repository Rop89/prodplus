import React, { Component } from "react";
import Copyright from "./Copyright";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
} from "react-icons/ti";

class BottomNav extends Component {
  render() {
    return (
      <div>
        <div className="mt-6 flex flex-row justify-center mr-6">
          <div className="ml-2 flex flex-row text-gray-500">
            <h3>About us</h3>
            <div class="rounded-full h-2 w-2 flex items-center justify-center bg-green-200 mt-2 ml-2"></div>
          </div>
          <div className="flex flex-row mt-1 ml-2">
            <TiSocialFacebook />
            <TiSocialTwitter />
            <TiSocialInstagram />
          </div>
          <div class="rounded-full h-2 w-2 flex items-center justify-center bg-green-200 mt-2 ml-2"></div>
          <div className="ml-2 flex flex-row text-gray-500">
            <h3>Contact</h3>
          </div>
        </div>
        <Copyright />
      </div>
    );
  }
}

export default BottomNav;
