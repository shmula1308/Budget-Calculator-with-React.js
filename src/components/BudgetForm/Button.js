import React from "react";
import styles from "./Button.module.css";
import { FaPaperPlane } from "react-icons/fa";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={!props.type ? "button" : props.type}
      onClick={props.onClick}
    >
      {props.children}
      <FaPaperPlane className={styles.icon} />
    </button>
  );
};

export default Button;
