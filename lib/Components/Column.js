import React from 'react';
import cx from "classnames";

export default function Column(props) {
  
  let styles = {}
  // check for custom styles to spread
  if(props.data?.styles){
    styles = props.data.styles
  }

  return (
    <div
      className={cx("Column", props.data?.classes)}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: props.data.width,
        ...styles
      }}
    >
      {props.children}
    </div>
  );
}
