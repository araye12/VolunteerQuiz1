import React, { useState } from "react";
import x11 from "./assets/1.png";
import x21 from "./assets/2.png";
import x31 from "./assets/3.png";
import x41 from "./assets/4.png";
import canada from "./assets/canada.png";
import rainforest from "./assets/rainforest.png";
import paris from "./assets/paris.png";
import compm from "./assets/compm.png";
import "./App.css";

const App = () => {
  const [section, setSection] = useState(1);

  return (
    <div className="container">
      {/* Volunteer Quiz Section */}
      {section === 1 && (
        <>
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

          {/* Arrow to next section */}
          <button className="next-button" onClick={() => setSection(2)}>→</button>
        </>
      )}

      {/* Traits Selection Section */}
      {section === 2 && (
        <>
          <h2 className="traits-title">What group of traits best describe you?</h2>
          <div className="traits-grid">
            <div className="trait-card trait-pink">
              <h3>Practical, Problem-Solving, Resourceful</h3>
              <img src={x11} alt="Practical Traits" />
            </div>
            <div className="trait-card trait-green">
              <h3>Dynamic, Outdoorsy, Passionate</h3>
              <img src={x21} alt="Dynamic Traits" />
            </div>
            <div className="trait-card trait-yellow">
              <h3>Big Picture Oriented, Contemplative, Organized</h3>
              <img src={x31} alt="Big Picture Traits" />
            </div>
            <div className="trait-card trait-blue">
              <h3>Creative, Social, Planner</h3>
              <img src={x41} alt="Creative Traits" />
            </div>
          </div>

          <button className="prev-button" onClick={() => setSection(1)}>←</button>
          <button className="next-button" onClick={() => setSection(3)}>→</button>
        </>
      )}

      {/* Vacation Selection Section */}
      {section === 3 && (
        <>
          <h1>Vacation Time!</h1>
          <h2>Where do you want to go?</h2>

          <div className="vacation-container">
            <div className="card" onClick={() => alert("You selected: Road trip across Western Canada")}>
              <img src={canada} alt="Western Canada" />
              <p>Road trip across Western Canada</p>
            </div>

            <div className="card" onClick={() => alert("You selected: Taking a tour of the Amazon Rainforest")}>
              <img src={rainforest} alt="Amazon Rainforest" />
              <p>Taking a tour of the Amazon Rainforest</p>
            </div>

            <div className="card" onClick={() => alert("You selected: Exploring the food and culture of Paris")}>
              <img src={paris} alt="Paris" />
              <p>Exploring the food and culture of Paris</p>
            </div>

            <div className="card" onClick={() => alert("You selected: Going to a computer museum")}>
              <img src={compm} alt="Computer Museum" />
              <p>Going to a computer museum</p>
            </div>
          </div>

          <button className="prev-button" onClick={() => setSection(2)}>←</button>
        </>
      )}
    </div>
  );
};

export default App;



