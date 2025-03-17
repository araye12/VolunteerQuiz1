import React from "react";
import x11 from "./assets/1.png";
import x21 from "./assets/2.png";
import x31 from "./assets/3.png";
import x41 from "./assets/4.png";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">What Kind Of Volunteer Are You?</h1>
      <p className="subtitle">
        Curious about where you’d thrive in our volunteering program? <br />
        Take this quiz to find out!
      </p>

      <div className="categories">
        <div className="category">
          <img src={x11} alt="Facilities Friend" />
        </div>
        <div className="category">
          <img src={x21} alt="Engagement Agent" />
        </div>
        <div className="category">
          <img src={x31} alt="Smooth Operator" />
        </div>
        <div className="category">
          <img src={x41} alt="Green Grower" />
        </div>
      </div>
    </div>
  );
};

export default App;

