import React from "react";
import image from "../CroppedClassPhoto.jpg";

function ClassPhoto() {
  return (
    <div>
      <img className="image" src={image} alt="class of 042522 group photo" />
    </div>
  );
}

export default ClassPhoto;
