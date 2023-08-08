import React from 'react';
export default function Node(props) {
 
  // set default return tag
  let HTMLElementTag = `div`;
  let styles = {};
  let classes = ``;
  
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
    if(HTMLElementTag.toLowerCase() == `img`){
      return <HTMLElementTag style={{
        maxWidth: '100%',
        height: 'auto',
        ...styles
      }} className={classes} width="auto" src={props.data.content} />;
    } else {
      return <HTMLElementTag style={styles} className={classes}>{props.data.content}</HTMLElementTag>;
    }
  } else {
    return <HTMLElementTag style={styles} className={classes} dangerouslySetInnerHTML={{ __html: props.data.html }} />
  }
  
}
