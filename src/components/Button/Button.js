import React from "react";
import PropTypes from "prop-types";

import s from "./Button.module.css";

const Button = ({ handleClickLoadMore }) => {
  return (
    <button type="button" className={s.Button} onClick={handleClickLoadMore}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  handleClickLoadMore: PropTypes.func,
};
