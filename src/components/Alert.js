import React from "react";

export default function Alert(props) {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.Alert.type}</strong>:{props.Alert.mgs}
        <button
          type="button"
          className="btn-close margen-alert"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}
