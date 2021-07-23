import React, { Fragment } from "react";

import { Components } from "./Components"

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

        if (child.type) {
          Component = Components["node"];
        }

        if (child.classes === "column") {
          Component = Components["column"];
        }

        if (child.classes === "row") {
          Component = Components["row"];
        }

        if (child.name === "layout:root:column:0") {
          Component = Components["root"];
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
