import React, {useState} from "react";
import "../styles/InCodeWithMe.css";
import MonacoEditor from 'react-monaco-editor';
import {Select} from "antd";
import {Option} from "antd/es/mentions";

function InCodeWithMe() {
  const [code, setCode] = useState("")
  const [fontSize, setFontSize] = useState(10)
  const [language, setLanguage] = useState("javascript")

  const options = {
    copyWithSyntaxHighlighting: true,
    selectOnLineNumbers: true,
    fontSize: fontSize
  };

  const editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor)
    editor.focus();
  }

  const onChange = (newValue, e) => {
    console.log('onChange', newValue, e)
  }

  const onFontSizeChange = (newValue, e) => {
    setFontSize(newValue)
  }

  const onLanguageChange = (newValue, e) => {
    setFontSize(newValue)
  }

  return <div className="icw">
    <Select defaultValue="10" style={{width: 120}} onChange={onFontSizeChange}>
      <Option value="10">10</Option>
      <Option value="15">15</Option>
      <Option value="20">20</Option>
      <Option value="25">25</Option>
    </Select>
    <Select defaultValue="javascript" style={{width: 120}} onChange={onLanguageChange}>
      <Option value="javascript">javascript</Option>
      <Option value="java">java</Option>
    </Select>
    <MonacoEditor
      width="800"
      height="600"
      language={language}
      theme="vs-dark"
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  </div>
}
export default InCodeWithMe;
