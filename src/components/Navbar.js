import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo-prodplus.png";
import NavbarButton from "../components/NavbarButton";

function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Link to="#" className="">
          <img className=" ml-6 mt-6 " src={logo} alt="Prodplus Logo" />
        </Link>
        <h1 className="ml-8 mt-2">ProdPlus</h1>
      </div>
      <NavbarButton />
    </div>
  );
}
export default Navbar;
