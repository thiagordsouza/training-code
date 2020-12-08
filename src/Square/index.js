import React from "react";
import Styles from "./style.module.css";

const Square = () => {
  let bool = false;
  return (
    <div className={[bool ? Styles.shape : null, Styles.color].join(" ")} />
  );
};

export default Square;
