import React, { useEffect } from "react";
import { Button, Tree } from "antd";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import TreeDemo from "./TreeDemo";
import { getViews } from "./util";

const list = [
  {
    index: 0,
    title: 0
  },
  // {
  //   index: 1,
  //   title: 0
  // },
]

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    list.forEach((item) => {
      getViews(item)
    })
  }, [])

  return (
    <div className={styles.page}>
      Home
      <Button type="primary">button</Button>
      <div onClick={() => navigate("/test")}>test</div>
      <div className="flex">
        <div className="text-4xl">1</div>
        <div>2</div>
      </div>
      <div onClick={() => window.open("https://www.yuque.com/yidishui")}>
        window.open
      </div>
      <div style={{ width: 300 }}>
        <TreeDemo />
      </div>
    </div>
  );
};

export default Home;
