import { atom, useAtom, useAtomValue, useSetAtom } from "@/common/frame/jotai";
import Provider from "@/common/frame/jotai/Provider";
import { Button } from "antd";
import React from "react";

const selfAtom = atom(0);

const JotaiSelf = () => {
  const count = useAtomValue(selfAtom);
  console.log('ccc', count);
  
  return (
    <div>
      数值：{count}
      <Children />
    </div>
  );
};

function Children() {
  const setCount = useSetAtom(selfAtom);
  return (
    <div>
      <Button onClick={() => setCount(2)}>点击新增</Button>
    </div>
  );
}

export default JotaiSelf;
