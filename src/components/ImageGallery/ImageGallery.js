import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem";

import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <ul className={s.ImageGallery} id="imageGallery">
      <ImageGalleryItem images={images} handleOpenModal={handleOpenModal} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  handleOpenModal: PropTypes.func,
};
