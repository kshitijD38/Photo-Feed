import React from "react";
import "./Card.css";

const Card = ({
  imgSrc,
  setSelectedImage,
  imgIndex,
  setSelectedImageIndex,
}) => {
  const handleClick = () => {
    setSelectedImage(imgSrc);
    setSelectedImageIndex(imgIndex);
  };

  return (
    <div className="card">
      <div className="card_container">
        <img onClick={handleClick} src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default Card;
