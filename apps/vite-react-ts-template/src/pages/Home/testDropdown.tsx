import React, { useState } from 'react';
import { Button, Dropdown } from 'antd';

function Child(props: any) {
  const { number } = props;
  console.log('子组件触发了', number);

  return <div>更新的值：{number}</div>;
}

const List = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      {/* <Dropdown overlay={() => { return <Child number={number} /> }}> */}
      <Dropdown overlay={<Child number={number} />}><span>触发</span></Dropdown>
      <Button onClick={() => { setNumber(pre => pre + 1) }}>
        改变状态
      </Button>
      <div>
        
      </div>
    </div>
  );
};

export default List;
