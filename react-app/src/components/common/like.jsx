import React, { Component } from "react";

const Like = (props) => {
  const { liked, onLikedToggle } = props;
  let classes = "float-right fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      onClick={onLikedToggle}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
