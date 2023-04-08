import { getAllWebPage } from "@/service";
import { Button, Input } from "antd";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { recoil } from "state";
import { countState } from "../Recoil/store";

enum EActions {
  setState,
  setBatchEdit,
  setBatchDelete,
  setBatchShare,
  resetBatchMode,
  setPassStateMap
}

const a = new Map()
a.set(1,1)
a.set(-1, -1)
const b = new Map(a)
b.delete(-1)
console.log(b, a);


function stateReducer(state: any, action: any): any {
  switch (action.type) {
    case EActions.setState:
      return { ...state, ...action.payload };
    default:
      throw new Error('wrong action type');
  }
}

const Test = () => {
  const [html, setHtml] = useState('');
  const [update, setUpdate] = useState(0)
  const [state, dispatch] = useReducer(stateReducer, {
    map: new Map()
  })
  const [list, setList] = useState([{status: 1}])

  useEffect(() => {
    // getAllWebPage({
    //   templateInfo: {},
    //   page: { currentPage: 1, showCount: 9999 },
    // })
    //   .then((res) => {
    //     console.log('res', res);
    //   })
    // alert('wx', wx);
    // wx.hideTabBar({ success: () => console.log('123'), fail: (e) => console.log('e', e)})
  }, []);

  const handleChange = (e) => {
    console.log('eee', e);
    
    setHtml(e.target.value)
  }

  const handleClick = () => {
    setTimeout(() => {
      console.log('time', state);
      
    }, 0)
    state.map.set(1, '1')
    setUpdate(pre => pre + 1)
    list.forEach((item) => {
      item.status = item.status + 1
    })
  }
  console.log('state', state, list);
  

  return (
    <div className="flex">
      <Button onClick={handleClick}>点击</Button>
      {/* <Input.TextArea onChange={handleChange} />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        // style={{ width: "100%", height: 800 }}
      /> */}
    </div>
  );
};

export default Test;
