import React from "react";
import "./Modal.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Modal = ({
  selectedImage,
  setSelectedImage,
  selectedImageIndex,
  setSelectedImageIndex,
  imgData,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  const handleLeft = () => {
    if (selectedImageIndex !== 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
      setSelectedImage(imgData[selectedImageIndex].urls.regular);
    }
  };

  const handleRight = () => {
    if (selectedImageIndex !== imgData.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
      setSelectedImage(imgData[selectedImageIndex].urls.regular);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="backdrop_container">
        <div style={{ marginLeft: 10 }} onClick={handleLeft}>
          <ArrowBackIosIcon />
        </div>
        <img src={selectedImage} alt="Modal" />
        <div style={{ marginRight: 10 }} onClick={handleRight}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Modal;
