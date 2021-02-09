import React from "react";
import Navbar from "../components/Navbar"
import reportsPic from "../imgs/reports_undraw.svg";


function Home() {
  return (
    <>
    <div className="font-sans">
      <Navbar/>
      <div className="">
        <img
            className="mt-20 ml-4"
            src={reportsPic}
            alt="Reporting on ProdPlus"
          />
        </div>
        <div className="bg-black h-64">
          <p className="text-white">Never think about how to manage your time anymore</p>
        </div>
    </div>
  
</>
  );
}
export default Home;
