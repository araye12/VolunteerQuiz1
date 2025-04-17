import React, { useState, useEffect } from "react";
import x11 from "./assets/1.png";
import x21 from "./assets/2.png";
import x31 from "./assets/3.png";
import x41 from "./assets/4.png";
import canada from "./assets/canada.png";
import rainforest from "./assets/rainforest.png";
import paris from "./assets/paris.png";
import compm from "./assets/compm.png";
import farmer from "./assets/farmer.png";
import grass from "./assets/grass.png";
import "./App.css";

const App = () => {
  const [section, setSection] = useState(1);
  const [history, setHistory] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedLightup, setSelectedLightup] = useState("");


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section]);
  
  const toggleHobby = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      // Unselect hobby if already selected
      setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
    } else if (selectedHobbies.length < 2) {
      // Add new hobby if fewer than 2 are selected
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };
  const goToNext = (nextSection) => {
    setHistory((prev) => [...prev, section]); // Save current section
    setSection(nextSection);
  };

  const goBack = () => {
     const prev = history[history.length - 1]; // Last section visited
     setHistory((prevHist) => prevHist.slice(0, -1)); // Remove it
     setSection(prev);
  };

  const sectionBackgrounds = {
    1: '#7f6b58',
    2: '#fffaf0', 
    3: '#E0F4FF',  
    4: '#D8BFD8' , 
    5: '#f0e4d7',
  };

  document.body.style.backgroundColor = sectionBackgrounds[section];


  return (
    <div className="container" style ={{ backgroundColor: sectionBackgrounds[section]}}>
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
          <button className="start-button" onClick={() => setSection(2)}>Start</button>
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
       {section === 3 && (
        <>
          <h1 className="hobby-title">pick 2 hobbies</h1>
          <div className="hobbies-grid">
          {[
              "woodcarving",
              "foraging",
              "growing your own food",
              "photography",
              "organizing plans",
              "hosting dinner parties",
              "DIY home improvements",
              "writing"
            ].map((hobby) => (
              <div
                key={hobby}
                className={`hobby-button ${selectedHobbies.includes(hobby) ? "selected" : ""}`}
                onClick={() => toggleHobby(hobby)}
              >
                {hobby}
              </div>
            ))}
          </div>
            <div className="hobby-illustration">
              <img src={grass} alt="Grass" className="bottom-grass" />
              <img src={farmer} alt="Farmer" className="bottom-farmer" />
              </div>
          <div className="button-container nav-buttons">
            <button className="prev-button" onClick={() => setSection(2)}>←</button>
            <button className="next-button" onClick={() => setSection(4)}>→</button>
          </div>
        </>
      )}    
      {/* Vacation Selection Section */}
      {section === 4 && (
        <>
          <h1>Vacation Time!</h1>
          <div className = "vacation-subtitle">
            <h2>Where do you want to go?</h2>
          </div>
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
            <div className = "button-container nav-buttons">
          <button className="prev-button" onClick={() => setSection(3)}>←</button>
          <button className="next-button" onClick={() => setSection(5)}>→</button> {/* if you're adding a next step */}

          </div>
        </>
      )}
      {section === 5 && (
         <>
         <h1 className="lightup-title">What lights you up?</h1>
    <div className="lightup-grid">
      {[
        {
          id: "fixing",
          text: "Fixing things! I love taking something damaged or outdated and giving it new life, it makes me feel fulfilled and proud of my handiwork!"
        },
        {
          id: "people",
          text: "Connecting with people! In whatever way it manifests, I love getting to know others. It is so fun and rewarding to find those things I have in common with someone else, and let them know that I see and hear them!"
        },
        {
          id: "bigPicture",
          text: "Seeing the big picture and working towards getting there! I put thought into the things I want to accomplish, and when I have the chance to do that on a bigger scale and help make real change, I couldn’t be more satisfied!"
        },
        {
          id: "nature",
          text: "Connecting with nature. I have always loved being outdoors and when I have the ability to really devote time to being part of the beautiful natural world we exist in, I feel fulfilled and full of peace!"
        }
      ].map((option) => (
        <div
          key={option.id}
          className={`lightup-item ${selectedLightup === option.id ? "selected" : ""}`}
          onClick={() => setSelectedLightup(option.id)}
        >
          <div className="star"></div>
          <p>{option.text}</p>
        </div>
             ))}
              </div>

               <div className="nav-buttons">
                  <button className="prev-button" onClick={() => setSection(4)}>←</button>
                  <button className="next-button" onClick={() => setSection(6)}>→</button>
                </div>
             </>
           )}
    </div>
  );
};

export default App;



