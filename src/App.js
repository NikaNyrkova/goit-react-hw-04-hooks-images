import React, { useState } from "react";

import Searchbar from "./components/Searchbar";
import fetchImagesByQuery from "./servises/fetchImages";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
import ShowLoader from "./components/Loader";

import "modern-normalize/modern-normalize.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [onError, setOnError] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetchImagesByQuery(searchQuery, 1)
      .then((responce) => {
        setImages([...responce.data.hits]);
        setCurrentPage(1);
      })
      .catch((error) => setOnError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleClickLoadMore = () => {
    setIsLoading(true);

    fetchImagesByQuery(searchQuery, currentPage + 1)
      .then((responce) => {
        setImages((prevState) => [...prevState, ...responce.data.hits]);
        setCurrentPage((prevState) => prevState + 1);
      })
      .catch((error) => setOnError(error.message))
      .finally(() => {
        setIsLoading(false);
        window.scrollTo({
          top: document.querySelector("#imageGallery").scrollHeight,
          behavior: "smooth",
        });
      });
  };

  const handleOpenModal = (e) => {
    setShowModal(true);
    setModalImg(e.target.dataset.source);
    setModalAlt(e.target.dataset.alt);
  };

  const handleCloseModal = (e) => {
    if (e.target.nodeName !== "IMG") {
      setShowModal(false);
      setModalImg("");
      setModalAlt("");
    }
  };

  return (
    <div className="App">
      <Searchbar
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
        handleSubmitForm={handleSubmitForm}
      />

      <ImageGallery images={images} handleOpenModal={handleOpenModal} />

      {isLoading && <ShowLoader />}

      {images.length !== 0 && (
        <Button handleClickLoadMore={handleClickLoadMore} />
      )}

      {showModal && (
        <Modal
          modalImg={modalImg}
          modalAlt={modalAlt}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
