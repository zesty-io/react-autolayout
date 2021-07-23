import React from 'react';
export function CustomTextarea(props) {
    return <div style={{ fontWeight: "bold", fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: props.data.html }} />;
}
