import React, { Fragment } from "react";

const Components = {};

// Layout
Components["container"] = require("./Components/Container").default;
Components["columns"] = require("./Components/TwoColumn").default;

// Field Types
Components["text"] = require("./Components/Text").default;

/**
 * Recursive component
 * Provided a "layout" tree it will recurse the tree
 * and build up into a Component hierarchy
 * @param {*} props
 * @returns
 */
export default function Choose(props) {
  const depth = props.depth + 1 || 1;

  return (
    <Fragment>
      {props.layout.map((child, i) => {
        let Component = (props) => {
          return <Fragment>MISSING COMPONENT {props.children}</Fragment>;
        };

        // width indicates layout
        if (child.width) {
          Component = Components["container"];
        }

        if (child.type && Components[child.type]) {
          Component = Components[child.type];
        }

        return (
          <Component key={i} data={child}>
            {/* Inline so Choose is a component and not jsx literal */}
            {child.children ? (
              <Choose depth={depth} layout={child.children} />
            ) : null}
          </Component>
        );
      })}
    </Fragment>
  );
}
