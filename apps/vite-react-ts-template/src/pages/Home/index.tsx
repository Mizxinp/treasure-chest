import React, { useEffect } from "react";
import { Button, Tree } from "antd";
import styles from "./index.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import TreeDemo from "./TreeDemo";
import { getViews } from "./util";
import { renderToString } from 'react-dom/server';
import TestNode from '../Test'

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
  const navigate = useNavigate()
  const location = useLocation()
  const query = queryString.parse(location.search)
  console.log('query', query);
  console.log('jjjjjjj', process.env.NODE_ENV)

  useEffect(() => {
    list.forEach((item) => {
      getViews(item)
    })
  }, [])

  const handleClick = () => {
    const html = renderToString(<TestNode />)
    console.log('html', html);
  }
  
  return (
    <div className={styles.page} id="home">
      Home
      <Button type="primary">button</Button>
      <Button onClick={handleClick}>生成</Button>
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
