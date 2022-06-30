# Zesty.io Auto Page Layout in React

> React components to consume the marketers controlled Zesty.io Drag n Drop Content Deisgner JSON which rendered automatics layouts.

The AutoLayout feature allows for content authors to use the Drag n Drop ContentDesigner tool to craft a layout structure which is made available with JSON endpoints which are consumed by this library. Once Content Designer JSON enpoints are consumed, all published changes to content or layout in the ManagerUI will automatically be reflected on the front-end.

# Getting Started

In your React NextJS app, install autolayout with an npm call

```npm i @zesty-io/react-autolayout```

There are two implmentation of auto layout, (1) works with Next.js (2) works independently. 

## 1. Next.js implementation

The expects the `{content}` object fed from the nextjs zesty integration to be passed to the AutoLayout object.

```javascript
import React from 'react'
import { AutoLayout } from "@zesty-io/react-autolayout";

export default function Page({ content }) {
  return (
    <div className="container">
      <AutoLayout content={content} />
    </div>
  );
}
```

## Independent Implementation

In the component you want to run auto layout, using the URL

```javascript
import { AutoLayout } from "@zesty-io/react-autolayout";

export default function Page({ page }) {
  let zestyToJSONReference= `https://4q6k83l9-dev.webengine.zesty.io/zop-gun/?toJSON`
  return (
    <div className="container">
      <AutoLayout url={zestyToJSONReference} />
    </div>
  );
}
```

## Using  custom components 

Custom components can be written to override the defaults pages components for content types like Textarea, Column, Text etc.. An example of that code is:

```javascript
import React from "react";

import { AutoLayout } from "@zesty-io/react-autolayout";
import { CustomTextarea } from "./CustomTextarea";
import { CustomColumn } from "./CustomColumn";

export default function Page({ page }) {
  let zestyJSONReference = `https://4q6k83l9-dev.webengine.zesty.io/zop-gun/?toJSON`
  return (
    <div className="container">
      <AutoLayout url={zestyJSONReference} components={{
      "textarea": CustomTextarea,
      "column": CustomColumn
    }} />
    </div>
  );
}
```

The `CustomTextarea` custome component is written like: 

```javascript
import React from 'react';
export function CustomTextarea(props) {
    return <div  style={{
        margin: "16px"
    }}>
        <h1>Custom  Textarea Component</h1>
        <p style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "red"
        }} dangerouslySetInnerHTML={{ __html: props.data.html }} />
    </div>;
}
```

Explore NextJS example reference: https://github.com/zesty-io/demos/blob/main/nextjs/pages/autolayout


## Example Images

![autolayout-manager-ui](https://user-images.githubusercontent.com/208819/126240959-eb8add91-ed8e-4f37-88b3-a51ba7ca34ca.png)
![autolayout-content-designer](https://user-images.githubusercontent.com/208819/126240964-d6db1670-da1e-446f-b4b5-26afe9553471.png)
![autolayout-webpage](https://user-images.githubusercontent.com/208819/126241108-a10926f1-0b73-4962-81df-b8e45f8b4ff3.png)


