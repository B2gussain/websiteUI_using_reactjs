import React from "react";
import about7 from "../assets/about-7.webp";
import litcard1 from "../assets/9.webp";
import litcard2 from "../assets/services-1.webp";
import service2 from "../assets/services-2.webp";
import service3 from "../assets/services-3.webp";
import service4 from "../assets/services-4.webp";
const service = () => {
  return (
    <div className="serviceone">
      <h3>Services</h3>
      <h1>Popular Services</h1>
      <div className="cards">
        <div className="card">
          <img src={litcard2} alt="" />
          <h2>Trend Haircut</h2>
          <p>
            Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu
            vel eros
          </p>
          <button>READ MORE</button>
        </div>
        <div className="card">
          {" "}
          <img src={service2} alt="" />
          <h2>Hair Washing</h2>
          <p>
            Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu
            vel eros
          </p>
          <button>READ MORE</button>
        </div>
        <div className="card">
          {" "}
          <img src={service3} alt="" />
          <h2>Hair Coloring</h2>
          <p>
            Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu
            vel eros
          </p>
          <button>READ MORE</button>
        </div>
        <div className="card">
          {" "}
          <img src={service4} alt="" />
          <h2>Facial hair Trim</h2>
          <p>
            Fusce ornare commodo leo, id maximus ex consequat nec. Cras sed arcu
            vel eros
          </p>
          <button>READ MORE</button>
        </div>
      </div>
      <img className="about7" src={about7} alt="" />
      <div className="imgtext">
        <h3>About Us</h3>
        <h1>The Best Barber Trending Style</h1>
        <p>
          Haircut" is a term used to describe when a person removes the hair on
          their head. This is done to allow for better
        </p>
        <button>READ MORE</button>
      </div>
      <div className="blank">
        <div className="litcards">
          <div className="litcard">
            <img src={litcard1} alt="" />
            <div className="litcardtext">
              <h1>150K</h1>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="litcard">
            <img src={litcard2} alt="" />
            <div className="litcardtext">
              <h1>668K</h1>
              <p>Customer Haircut</p>
            </div>
          </div>
          <div className="litcard">
            <img src={litcard1} alt="" />
            <div className="litcardtext">
              <h1>50K</h1>
              <p>Our Salons</p>
            </div>
          </div>
          <div className="litcard">
            <img src={litcard1} alt="" />
            <div className="litcardtext">
              <h1>10K</h1>
              <p>Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
