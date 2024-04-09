import "./App.css";
import { React, useEffect, useState } from "react";
function App() {
  const images = [
    "http://localhost:5173/images/BW.jpeg",
    "http://localhost:5173/images/ca.jpeg",
    "http://localhost:5173/images/HE.jpeg",
    "http://localhost:5173/images/hulk.jpeg",
    "http://localhost:5173/images/Im.jpeg",
    "http://localhost:5173/images/nf.jpeg",
    "http://localhost:5173/images/thor.jpeg",
  ];
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  const handleClick = (index) => {
    setBackgroundImage(images[index]);
  };

  useEffect(() => {
    console.log("Background image changed to:", backgroundImage);
  }, [backgroundImage]);

  return (
    <>
      <div
        className="App"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="images">
          `
          {images.map((image, index) => (
            <img
              src={image}
              alt="image"
              className="image"
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
