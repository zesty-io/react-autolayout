import React from 'react';
export default function Node(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.data.html }} />;
}
