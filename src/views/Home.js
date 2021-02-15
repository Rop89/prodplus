import React from "react";
import Navbar from "../components/Navbar"
import thinkingCode from "../imgs/thinking_code_undraw.svg";



function Home() {
  return (
    <div className="font-sans">
      <Navbar/>
      <div className="mb-4">
        <img
            className="mt-20"
            src={thinkingCode}
            alt="Reporting on ProdPlus"
          />
        </div>
        <div className=" h-64 flex flex-col mt-16">
          <h1 className=" text-xl text-gray-500 ml-4 mr-4">Your Best Productive Self</h1> 
          <h1 className="text-2xl ml-4 mr-4">Never think about how to manage your time anymore.</h1>
          <p className="mt-4 ml-4 mr-4">With the Prodplus App you will be able to see how long you take to complete a task and you will be given suggestions to spend your time more carefully</p> 
        </div>
        <div className="flex flex-row items-center justify-center">
          <div class="rounded-full h-32 w-32 flex items-center justify-center bg-green-200">Time Tracking</div>
          <div class="rounded-full h-24 w-24 flex items-center justify-center bg-green-200">Time Reporting</div>
          <div class="rounded-full h-24 w-24 flex items-center justify-center bg-green-200">Task Suggestions</div>
        </div>
    </div>
  );
}
export default Home;
