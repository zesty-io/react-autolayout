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
  const [error, setError] = useState(null);

  // if url is passed
  useEffect(() => {
    try {
      if (typeof props.url !== "undefined") {
        fetch(props.url)
          .then((res) => res.json())
          .then((json) => {
            // walk tree and convert children objects to arrays
            const root = json.meta?.layout?.json["layout:root:column:0"];
            console.log("url", root);

            walk(root);
            setPvl(root);
          })
          .catch((err) => {
            setError(err.toString());
            throw err;
          });
      } else if (typeof props.content !== "undefined") {
        try {
          const root =
            props.content?.meta?.layout?.json["layout:root:column:0"];
          console.log("content", root);
          walk(root);
          setPvl(root);
        } catch (err) {
          setError(err.toString());
          throw err;
        }
      }
    } catch (err) {
      setError(err.toString());
      throw err;
    }
  }, [props.url, props.content]);

  // if content or props is empty, throw a graceful error (should not break)

  if (
    typeof props.content === "undefined" &&
    typeof props.url === "undefined"
  ) {
    return (
      <h6 style={{ color: "red" }}>Please pass props.content or props.url</h6>
    );
  }

  return (
    <div id="pvl">
      {pvl?.children ? (
        <Choose
          layout={pvl.children}
          components={props.components ? props.components : {}}
        />
      ) : error ? (
        error
      ) : (
        ""
      )}
    </div>
  );
}
