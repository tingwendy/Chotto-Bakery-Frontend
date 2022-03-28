import React from "react";
import cheesecake from "../assets/cheesecake.jpeg"
import "../App.css";

const About = () => {
    return (
        <div>
  
        <h3>About Us</h3>
           <div className="aboutContainer">
           <p class="aboutPage">In the Winter of 2018, I started learning to bake for fun from Youtube videos. 
           Eventually I liked this hobby so much I started taking classes for baking and recreated the sweets I ate during my travels. 
           I knew that one day I wanted to start a home bakery and that was where the idea of Chotto Bakery came to life. 
           After countless months of preparation, we are finally open for business!

           Our goal is to create the best gourmet pastries possible from the finest raw materials using our hands and heart. 
           We are dedicated to share the authentic taste of these pastries, made from the best quality ingredients.
        Chotto's featured cream puffs are individually handmade using flour from the best local sources, and are uniquely soft, yet crispy to the bite. 
            Our delicious cheesecakes are handcrafted and made to order, and retain a light and fluffy texture while producing a rich flavor. 
            Chotto’s selection of breads and pastries are always baked fresh with our special recipe, and our gourmet cakes are carefully crafted with attention to detail.
            We hope you enjoy what we have to offer at Chotto!</p>
           <img className="about" src= {cheesecake} alt="about"/>
           </div>
             </div>
       
 
    )
};

export default About;