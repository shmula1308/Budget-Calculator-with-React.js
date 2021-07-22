import React from "react";
import styles from "./Button.module.css";
import { FaPaperPlane } from "react-icons/fa";

const Button = (props) => {
  return (
    <button className={styles.button} type="submit">
      {props.children}
      <FaPaperPlane className={styles.icon} />
    </button>
  );
};

export default Button;
