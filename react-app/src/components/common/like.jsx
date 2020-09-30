import React, { Component } from "react";

const Like = (props) => {
  let classes = "float-right fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      onClick={props.onLikedToggle}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
