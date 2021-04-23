import React from "react";
import Card from "../Card/Card";
import "./Board.css";

const Board = ({ imgData, setSelectedImage, setSelectedImageIndex }) => {
  //const iImage =
  //"https://images.unsplash.com/photo-1619092501939-93cd79994fe6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

  //   console.log(imgData);

  return (
    <div className="board">
      <div className="container">
        {imgData.map((image, index) => (
          <Card
            key={`${image.id}${index}`}
            imgSrc={image.urls?.regular}
            setSelectedImage={setSelectedImage}
            imgIndex={index}
            setSelectedImageIndex={setSelectedImageIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
