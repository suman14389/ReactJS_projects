import React from "react";
import "./toast.css";

function Toast(props) {
  return (
    <div className="toast">
      <p id="close" onClick={props.closeToast}>
        x
      </p>
      <p id="message">{props.toastMessage} </p>
    </div>
  );
}

export default Toast;
