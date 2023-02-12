import React from "react";

const ImageLink = ({ link, imgUrl }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <img src={imgUrl} alt="" onClick={handleClick} />
  );
};

export default ImageLink;
