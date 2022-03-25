import React from "react";
import background from "../assets/background.jpeg"


function Home () {
  
    return (
        <div>
        <div class="row" id="box">
            <div class="text-center"></div>
            <h1 className="home">HELLOOOO</h1>
            <img className="background" src= {background} alt="background" />
        </div>
        <div>
           <h2>About Section </h2>
        </div>
        </div>

    )
}

export default Home;