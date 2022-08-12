import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

  const App = (props) => (
    <>
      <Select
        defaultValue={props.defaultValue}
        style={{
          width: 150,
          margin: 20,
        }}
        onChange={props.onChange}
      >
        <Option value=''>{props.defaultValue}</Option>        
        <Option value={props.option1}>{props.option1}</Option>
        <Option value={props.option2}>{props.option2}</Option>
        <Option value={props.option3}>{props.option3}</Option>
        <Option value={props.option4}>{props.option4}</Option>
        <Option value={props.option5}>{props.option5}</Option>
        <Option value={props.option6}>{props.option6}</Option>
      </Select>
    </>
  );
  
  export default App;