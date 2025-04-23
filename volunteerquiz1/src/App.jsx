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
import tree from "./assets/tree.png";
import "./App.css";

const App = () => {
  const [section, setSection] = useState(1);
  const [history, setHistory] = useState([]);
  const [selectedTrait, setSelectedTrait] = useState("");
  const [selectedVacation, setSelectedVacation] = useState("");
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedHouseOption, setSelectedHouseOption] = useState("");
  const [selectedLightup, setSelectedLightup] = useState("");
  const [result, setResult] = useState("");
  const [teamPercentages, setTeamPercentages] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section]);

  const toggleHobby = (hobby) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
    } else if (selectedHobbies.length < 2) {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const goToNext = (nextSection) => {
    setHistory((prev) => [...prev, section]);
    setSection(nextSection);
  };

  const goBack = () => {
    const prev = history[history.length - 1];
    setHistory((prevHist) => prevHist.slice(0, -1));
    setSection(prev);
  };

  const selectHouseOption = (index) => {
    setSelectedHouseOption(index);
  };

  const getTeamFromAnswers = () => {
    const teamCount = {
      facilities: 0,
      growing: 0,
      engagement: 0,
      operations: 0,
    };

    if (selectedTrait) teamCount[selectedTrait]++;

    const hobbyTeams = {
      "woodcarving": "facilities",
      "foraging": "growing",
      "growing your own food": "growing",
      "photography": "engagement",
      "hosting dinner parties": "engagement",
      "organizing plans": "operations",
      "writing": "operations",
      "DIY home improvements": "facilities"
    };

    selectedHobbies.forEach((hobby) => {
      const team = hobbyTeams[hobby];
      if (team) teamCount[team]++;
    });

    const vacationTeams = {
      canada: "facilities",
      rainforest: "growing",
      paris: "engagement",
      computerMuseum: "operations"
    };

    if (selectedVacation) {
      const team = vacationTeams[selectedVacation];
      if (team) teamCount[team]++;
    }

    const houseTeams = {
      0: "operations",
      1: "growing",
      2: "engagement",
      3: "facilities"
    };

    const houseTeam = houseTeams[selectedHouseOption];
    if (houseTeam) teamCount[houseTeam]++;

    const lightupTeams = {
      fixing: "facilities",
      people: "engagement",
      bigPicture: "operations",
      nature: "growing"
    };

    if (selectedLightup) teamCount[lightupTeams[selectedLightup]]++;

    const total = Object.values(teamCount).reduce((a, b) => a + b, 0);
    const percentages = {};
    Object.entries(teamCount).forEach(([team, count]) => {
      percentages[team] = Math.round((count / total) * 100);
    });

    const topTeam = Object.keys(teamCount).reduce((a, b) =>
      teamCount[a] > teamCount[b] ? a : b
    );

    return { topTeam, percentages };
  };

  const outcomes = {
    facilities: {
      name: "Facilities Friend",
      description:
        "You have some skills you’d like to share or develop here at the farm! From building garden beds to helping repair barns, you like constructing things and working out a project to find a solution to a problem. Consider checking out information here about our Facilities Team and all our other volunteering opportunities! We’d love to have you here at the farm as part of our growing community!",
      image: x11,
      color: "#B44F2B"
    },
    growing: {
      name: "Green Grower",
      description:
        "You're here to get your hands dirty and learn some more about plants and growing your own food! From working in the greenhouse to weeding in native flower beds, you love nature and are looking to get outdoors more.",
      image: x41,
      color: "#788E57"
    },
    engagement: {
      name: "Engagement Agent",
      description:
        "You’re in the right place to share your creativity and enthusiasm! From painting murals and taking photos to organizing events, you’re ready to engage the community!",
      image: x21,
      color: "#E2B763"
    },
    operations: {
      name: "Smooth Operator",
      description:
        "You’re excited to bring your skills to a big project! You value information, structure, and planning for the future.",
      image: x31,
      color: "#4C6E8A"
    }
  };

  const sectionBackgrounds = {
    1: '#7f6b58',
    2: '#fffaf0',
    3: '#E0F4FF',
    4: '#D8BFD8',
    5: '#f0e4d7',
    6: '#f0e4d7',
    7: '#f0e4d7',
  };

  document.body.style.backgroundColor = sectionBackgrounds[section];

  return (
    <div className="container" style={{ backgroundColor: sectionBackgrounds[section] }}>
      {/* Quiz Sections */}
      {section === 1 && (
        <>
          <h1 className="title">What Kind Of Volunteer Are You?</h1>
          <p className="subtitle">
            Curious about where you’d thrive in our volunteering program? <br />
            Take this quiz to find out!
          </p>
          <div className="categories">
            <div className="category"><img src={x11} alt="Facilities Friend" /></div>
            <div className="category"><img src={x21} alt="Engagement Agent" /></div>
            <div className="category"><img src={x31} alt="Smooth Operator" /></div>
            <div className="category"><img src={x41} alt="Green Grower" /></div>
          </div>
          <button className="start-button" onClick={() => setSection(2)}>Start</button>
        </>
      )}

      {section === 2 && (
        <>
          <h2 className="traits-title">What group of traits best describe you?</h2>
          <div className="traits-grid">
            <div className={`trait-card trait-pink ${selectedTrait === "facilities" ? "selected" : ""}`} onClick={() => setSelectedTrait("facilities")}>
              <h3>Practical, Problem-Solving, Resourceful</h3>
              <img src={x11} alt="Practical Traits" />
            </div>
            <div className={`trait-card trait-green ${selectedTrait === "growing" ? "selected" : ""}`} onClick={() => setSelectedTrait("growing")}>
              <h3>Dynamic, Outdoorsy, Passionate</h3>
              <img src={x21} alt="Dynamic Traits" />
            </div>
            <div className={`trait-card trait-yellow ${selectedTrait === "operations" ? "selected" : ""}`} onClick={() => setSelectedTrait("operations")}>
              <h3>Big Picture Oriented, Contemplative, Organized</h3>
              <img src={x31} alt="Big Picture Traits" />
            </div>
            <div className={`trait-card trait-blue ${selectedTrait === "engagement" ? "selected" : ""}`} onClick={() => setSelectedTrait("engagement")}>
              <h3>Creative, Social, Planner</h3>
              <img src={x41} alt="Creative Traits" />
            </div>
          </div>
          <div className="nav-buttons">
            <button className="prev-button" onClick={() => setSection(1)}>←</button>
            <button className="next-button" onClick={() => setSection(3)}>→</button>
          </div>
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
        {section === 4 && (
        <>
          <h1>Vacation Time!</h1>
          <div className="vacation-subtitle">
            <h2>Where do you want to go?</h2>
          </div>
          <div className="vacation-container">
            <div
              className={`card ${selectedVacation === "canada" ? "selected" : ""}`}
              onClick={() => setSelectedVacation("canada")}
            >
              <img src={canada} alt="Western Canada" />
              <p>Road trip across Western Canada</p>
            </div>
            <div
              className={`card ${selectedVacation === "rainforest" ? "selected" : ""}`}
              onClick={() => setSelectedVacation("rainforest")}
            >
              <img src={rainforest} alt="Amazon Rainforest" />
              <p>Taking a tour of the Amazon Rainforest</p>
            </div>
            <div
              className={`card ${selectedVacation === "paris" ? "selected" : ""}`}
              onClick={() => setSelectedVacation("paris")}
            >
              <img src={paris} alt="Paris" />
              <p>Exploring the food and culture of Paris</p>
            </div>
            <div
              className={`card ${selectedVacation === "computerMuseum" ? "selected" : ""}`}
              onClick={() => setSelectedVacation("computerMuseum")}
            >
              <img src={compm} alt="Computer Museum" />
              <p>Going to a computer museum</p>
            </div>
          </div>
          <div className="button-container nav-buttons">
            <button className="prev-button" onClick={() => setSection(3)}>←</button>
            <button className="next-button" onClick={() => setSection(5)}>→</button>
          </div>
        </>
      )}
      {section === 5 && (
        <>
          <h1 className="house-title">
            If you’re buying a house, which one of these features needs to be on your wishlist?
          </h1>
          <div className="house-options">
            {[
              "Separate home office, so I have plenty of space to organize my work",
              "Huge yard for a garden, bonus if it already has some mature fruit trees",
              "Right on mainstreet, I want to be able to walk to my favorite restaurants and town festivals",
              "A large workshop where I can keep all my tools and equipment while I work on my projects"
            ].map((option, index) => (
              <div
                key={index}
                className={`house-option option-${index + 1} ${selectedHouseOption === index ? "selected" : ""}`}
                onClick={() => selectHouseOption(index)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="tree-image-wrapper">
            <img src={tree} alt="Tree" className="tree-image" />
          </div>
          <div className="nav-buttons">
            <button className="prev-button" onClick={() => setSection(4)}>←</button>
            <button className="next-button" onClick={() => setSection(6)}>→</button>
          </div>
        </>
      )}
      {section === 6 && (
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
            <button className="prev-button" onClick={() => setSection(5)}>←</button>
            <button
              className="next-button"
              onClick={() => {
                const { topTeam, percentages } = getTeamFromAnswers();
                setResult(topTeam);
                setTeamPercentages(percentages);
                setSection(7);
              }}
            >→</button>
          </div>
        </>
      )}
      {section === 7 && result && (
        <div className="result-section">
          <div className="result-left">
            <img src={outcomes[result].image} alt={outcomes[result].name} className="result-image" />
          </div>

          <div className="result-right">
            <h2 style={{ color: outcomes[result].color }}>{outcomes[result].name.toUpperCase()}!</h2>
            <p style={{ fontWeight: "bold", fontSize: "24px" }}>{teamPercentages[result]}%</p>
          <div className="result-content-wrapper">
            <div className="donut-chart-placeholder">
              <svg viewBox="0 0 36 36" width="300" height="300" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#eee" strokeWidth="3" />
                {Object.entries(teamPercentages)
                  .filter(([_, pct]) => pct > 0)
                  .reduce((acc, [team, pct], index) => {
                    const offset = acc.reduce((sum, el) => sum + parseFloat(el.props["strokeDasharray"].split(" ")[0]), 0);
                    const dashArray = `${pct} ${100 - pct}`;
                    acc.push(
                      <circle
                        key={team}
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="none"
                        stroke={outcomes[team].color}
                        strokeWidth="3"
                        strokeDasharray={dashArray}
                        strokeDashoffset={100 - offset}
                      />
                    );
                    return acc;
                  }, [])}
              </svg>

              <ul className="legend">
                {Object.entries(teamPercentages)
                  .sort((a, b) => b[1] - a[1])
                  .map(([team, pct]) => (
                    <li key={team}>
                      <span style={{ color: outcomes[team].color }}>
                        {team}: {pct}%
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            <h3>ABOUT YOU:</h3>
            <p className="result-description">{outcomes[result].description}</p>

            <button
              className="restart-button"
              onClick={() => {
                setSelectedTrait("");
                setSelectedHobbies([]);
                setSelectedVacation("");
                setSelectedHouseOption("");
                setSelectedLightup("");
                setResult("");
                setTeamPercentages({});
                setHistory([]);
                setSection(1);
              }}
            >
              Restart Quiz
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;

