import { useState } from "react";
import React from "react";
import monacoThemes from "monaco-themes/themes/themelist";
import s from "./codeEditor.module.scss";
import Header from "./Header/Header";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");

  console.log(monacoThemes);

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className={s.codeEditor}>
      <Header />
      {/* <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      /> */}
      <div className={s.editor}>
        <Editor
          height="100%"
          width="100%"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme="Active4D  "
        />
      </div>
    </div>
  );
};

export default CodeEditor;
