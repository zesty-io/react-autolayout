import "./App.css";

import { AutoLayout } from "@zesty-io/react-autolayout";

import { CustomTextarea } from './CustomTextarea'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AutoLayout url={'https://4q6k83l9-dev.webengine.zesty.io/zop-gun/?toJSON'} components={{
          "textarea": CustomTextarea
        }} />
      </header>
    </div>
  );
}

export default App;
