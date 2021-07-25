import React from "react";
import ReactDOM from "react-dom";
import styles from "./Alert.module.css";

const AlertOverlay = (props) => {
  const classes = `${styles.alert} ${
    props.error ? styles.success : styles.fail
  }`;
  return <div className={classes}>{props.children}</div>;
};

const Alert = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <AlertOverlay children={props.children} error={props.error} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Alert;
