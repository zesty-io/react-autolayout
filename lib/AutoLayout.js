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
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((json) => {
        // walk tree and convert children objects to arrays
        const root = json.meta.layout.json["layout:root:column:0"];
        walk(root);
        setPvl(root);
      })
      .catch((err) => {
        setError(err.toString());
        throw err;
      });
  }, [props.instanceZUID, props.modelZUID]);

  return (
    <div id="pvl">
      {pvl?.children ? (
        <Choose layout={pvl.children} />
      ) : error ? (
        error
      ) : (
        "loading"
      )}
    </div>
  );
}
