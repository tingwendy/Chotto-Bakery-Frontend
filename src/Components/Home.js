import React from "react";
import background from "../assets/background.jpeg"


function Home () {
  
    return (
        <div>
        <div className="row" id="box">
            <div class="text-center"></div>
            <h5 className="aboveHome"> - Tarts - Cheesecake - Bread -</h5>
            <h1 className="home">Chotto Bakery</h1>
            <h5 className="belowHome">小さなパン屋</h5>
            <img className="background" src= {background} alt="background"/>
        </div>
        <div className="homeMiddle">
            <h5>Serving cakes and tea every Monday through Saturday from 9am-2pm</h5>
            <p>〰</p>
            <p>1111 The Alameda, San Jose, CA 95127</p>
            <p> (408) 696-9669</p>
        </div>
        <footer className="footer">
            <div className="footerOne">
           <h5><strong>CHOTTO BAKERY</strong></h5>
           <h5>Follow Us</h5>
           <a href="https://instagram.com" style={{ textDecoration: "none", color: "brown" }}>📸Instagram</a>
           <a href="https://yelp.com" style={{ textDecoration: "none", color: "brown" }}>☕Yelp</a>
           <a href="https://facebook.com" style={{ textDecoration: "none", color: "brown" }}> 👍Facebook</a>
           <h6>2022 © Chotto Bakery. All rights reserved.</h6>
           
           </div>
        </footer>
        </div>

    )
}

export default Home;