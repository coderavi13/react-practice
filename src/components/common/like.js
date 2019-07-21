import React from "react";

const Like = props => {
  const classes = props.isLiked ? "fa fa-heart-o" : "fa fa-heart";
  return <i onClick={props.onLike} className={classes} />;
};

export default Like;
