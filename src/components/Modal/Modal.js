import React, { useEffect } from "react";

import s from "./Modal.module.css";

const Modal = ({ handleCloseModal, modalImg, modalAlt }) => {
  useEffect(() => {
    const handlePressEsc = (e) => {
      if (e.key === "Escape") {
        handleCloseModal(e);
      }
    };
    window.addEventListener("keydown", handlePressEsc);
    return () => window.removeEventListener("keydown", handlePressEsc);
  });

  return (
    <div className={s.Overlay} onClick={handleCloseModal}>
      <div className={s.Modal}>
        <img src={modalImg} alt={modalAlt} />
      </div>
    </div>
  );
};

export default Modal;
