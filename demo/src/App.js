import "./App.css";

import { AutoLayout } from "@zesty-io/react-autolayout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AutoLayout url={'https://4q6k83l9-dev.webengine.zesty.io/zop-gun/?toJSON'} />
      </header>
    </div>
  );
}

export default App;
