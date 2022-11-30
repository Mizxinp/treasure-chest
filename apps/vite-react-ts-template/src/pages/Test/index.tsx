import { getAllWebPage } from "@/service";
import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { recoil } from "state";
import { countState } from "../Recoil/store";

const Test = () => {
  const [html, setHtml] = useState('');

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

  return (
    <div className="flex">
      <Input.TextArea onChange={handleChange} />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        // style={{ width: "100%", height: 800 }}
      />
    </div>
  );
};

export default Test;
