import React, {useState} from "react";
import "../styles/InCodeWithMe.css";
import MonacoEditor from 'react-monaco-editor';
import {Col, Row, Select} from "antd";
import {Option} from "antd/es/mentions";
import JoinMeeting from "./JoinMeeting";
import Code from "./Code";

function InCodeWithMe() {
  const [code, setCode] = useState("")
  const [fontSizeList, setFontSizeList] = useState([10, 15, 20, 25])
  const [fontSize, setFontSize] = useState(10)
  const [language, setLanguage] = useState("javascript")

  const options = {
    copyWithSyntaxHighlighting: true,
    selectOnLineNumbers: true,
    autoIndent: "full",
    bracketPairColorization: true,
    occurrencesHighlight: true,
    language: language,
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
    console.log(newValue);
    setFontSize(newValue)
  }

  const onLanguageChange = (newValue, e) => {
    console.log(newValue);
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
    <Row>
      <Col span={7}>
        <MonacoEditor
          language={language}
          theme="vs-dark"
          value={code}
          options={options}
          onChange={onChange}
          editorDidMount={editorDidMount}
        />
      </Col>
      <Col span={1}>
        <JoinMeeting/>
      </Col>
    </Row>
  </div>
}
export default InCodeWithMe;
