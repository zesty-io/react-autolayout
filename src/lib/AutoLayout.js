import React, { useEffect, useState } from "react";

import Choose from "./Choose";

function walk(node) {
  if (node && node.children) {
    // convert to array of child values
    node.children = Object.values(node.children);

    // check if children have children
    node.children.forEach((child) => {
      if (child.children) {
        child = walk(child);
      }
    });
  }

  return node;
}

export function AutoLayout(props) {
  const [pvl, setPvl] = useState({});

  useEffect(() => {
    fetch(
      `https://${props.instanceZUID}.webengine.zesty.io/z/pvl/${props.modelZUID}.json`
    )
      .then((res) => res.json())
      .then((json) => {
        // walk tree and convert children objects to arrays
        const root = json["layout:root:column:0"];
        walk(root);
        setPvl(root);
      });
  }, [props.instanceZUID, props.modelZUID]);

  console.log("PVL", pvl);

  return (
    <div id="pvl">
      {pvl?.children ? <Choose layout={pvl.children} /> : "loading"}
    </div>
  );
}
