import "./styles.css";
import { useState } from "react";

var techDictionary = {
  Fonts: [
    ["Google Fonts", "Library of around 1000 free licensed font families" ,"https://fonts.google.com/"],
    ["DaFont",  "Archive of freely downloadable fonts","https://www.dafont.com/"],
    ["1001 Free Fonts", "I think the name speaks for itself 😏", "https://www.1001freefonts.com/"]
  ],
  Icons: [
    ["UXWing", "Well Optimized, Free icons for commercial use", "https://uxwing.com/"],
    ["Shapedfonts Iconclub", "	8000+ free icons", "https://shapedfonts.com/iconclub/"],
    ["Feather Icons", "Beautiful, customizable open source icons", "https://feathericons.com/"]
  ],
  StockPhotos: [
    ["Pexels", "Free stock photos shared by talented creators", "https://www.pexels.com/"],
    ["Unsplash", "The internet’s source of freely usable images", "https://unsplash.com/"],
    ["Pixabay", "Over 1.7 million+ high-quality stock images and videos", "https://pixabay.com/"]
  ]
};

var techList = Object.keys(techDictionary);

export default function App() {
  var subList = techDictionary["Starter"];

  var [output, setOutput] = useState(subList);

  function techClickHandler(tech) {
    subList = techDictionary[tech];
    setOutput(subList);
  }

  return (
    <div className="App">
      <header>
        <h1>
          <span role="img" aria-label="tech">
            🍜
          </span>{" "}
          Hey techie!
        </h1>
      </header>
      <main>
        <p className="about">
          See a list of various tech items, their origin and rating. Choose a
          type to get started.
        </p>

        <div className="techList">
          {techList.map((tech) => {
            return <span onClick={() => techClickHandler(tech)}>{tech}</span>;
          })}
        </div>

        <hr />

        <div className="showtech">
          <ul>
            {Array.from(output).map((item) => {
              return (
                <li>
                  {item[0]}
                  <br />
                  <span className="Description">Description: {item[1]}</span>
                  <br />
                  <span className="Link">Link: {item[2]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <footer>
       
      </footer>
    </div>
  );
}
