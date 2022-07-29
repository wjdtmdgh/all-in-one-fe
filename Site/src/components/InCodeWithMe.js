import React, {useEffect, useState} from "react";
import "../styles/InCodeWithMe.css";
import { Checkbox, Col, Row, Select } from "antd";
import JoinMeeting from "./JoinMeeting";
import AceEditor from "react-ace";
import "ace-builds";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";


import { Option } from "antd/es/mentions";

function InCodeWithMe() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [fontSize, setFontSize] = useState(15);
  const [readOnly, setReadOnly] = useState(false);
  const [highlightActiveLineChange, setHighlightActiveLineChange] = useState(true);

  const onFontSizeChange = (newFontSize) => {
    console.log(newFontSize);
    setFontSize(newFontSize);
  };

  const onCodeChange = (newCode) => {
    setCode(newCode);
  };

  const onLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const onHighlightActiveLineChange = (e) => {
    console.log(setHighlightActiveLineChange);
    setHighlightActiveLineChange(e.target.checked);
  };

  const onReadOnly = (e) => {
    setReadOnly(e.target.checked);
  };

  return (
    <div className="icw">
      <Row>
        <Col span={3}>
          <div>
            <Select
              defaultValue={language}
              style={{ width: 120 }}
              onChange={onLanguageChange}
            >
              <Option value="javascript">javascript</Option>
              <Option value="java">java</Option>
              <Option value="python">python</Option>
              <Option value="xml">xml</Option>
              <Option value="ruby">ruby</Option>
              <Option value="sass">sass</Option>
              <Option value="markdown">markdown</Option>
              <Option value="mysql">mysql</Option>
              <Option value="json">json</Option>
              <Option value="html">html</Option>
              <Option value="handlebars">handlebars</Option>
              <Option value="golang">golang</Option>
              <Option value="csharp">csharp</Option>
              <Option value="coffee">coffee</Option>
              <Option value="css">css</Option>
            </Select>
          </div>
          <div>
            <Checkbox onChange={onHighlightActiveLineChange}>
              LineHighlight
            </Checkbox>
          </div>
          <div>
            <Select
              onChange={onFontSizeChange}
              defaultValue={fontSize}
              style={{ width: 120 }}
            >
              <Option value={10}>10</Option>
              <Option value={15}>15</Option>
              <Option value={20}>20</Option>
              <Option value={25}>25</Option>
            </Select>
          </div>
          <div>
            <Checkbox onChange={onReadOnly}>ReadOnly</Checkbox>
          </div>
        </Col>
        <Col span={10}>
          <AceEditor
            placeholder="Placeholder Text"
            mode={language}
            theme="Kuroir"
            name="blah2"
            onChange={onCodeChange}
            fontSize={fontSize}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={highlightActiveLineChange}
            readOnly={readOnly}
            value={code}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </Col>
      </Row>
      <JoinMeeting />
    </div>
  );
}
export default InCodeWithMe;
