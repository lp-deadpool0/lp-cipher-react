import "./null.scss";
import "./style.scss";
import Main from "./Main/Main";
import CodeEditor from "./CodeEditor/CodeEditor";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/editor" element={<CodeEditor />} />
      </Routes>
    </div>
  );
}

export default App;
