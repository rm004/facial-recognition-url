import React from "react";
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, boxes }) => {
  let count = 0;
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" src={imageUrl} alt="" width='500px' height='auto'/>
          {
            boxes.map(box => {
              count += 1;
              return <div key={count} className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            })
          }
      </div>
    </div>
  );
}

export default FaceRecognition;
