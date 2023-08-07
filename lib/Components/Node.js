import React from 'react';
export default function Node(props) {
 
  // set default return tag
  let HTMLElementTag = `div`;
  let styles = {};
  
  // check if a custom html tag is set, if so override
  if(props.data?.htmlElement){
    HTMLElementTag = props.data.htmlElement
  }

  // check for custom styles
  if(props.data?.styles){
    styles = props.data.styles
  }

  // check for custom classes
  if(props.data?.classes){
    classes = props.data.classes
  }

  // render the output based on if content exists, custom component do not have content
  if(props.data?.content){
    return <HTMLElementTag styles={styles} className={classes}>{props.data.content}</HTMLElementTag>;
  } else {
    return <HTMLElementTag styles={styles} className={classes} dangerouslySetInnerHTML={{ __html: props.data.html }} />
  }
  
}
