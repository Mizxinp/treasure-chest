import React from "react";
import { Tree } from "antd";
import styles from "./index.module.scss";
import {
  DownOutlined,
  MehOutlined
} from "@ant-design/icons";

const treeData: DataNode[] = [
  {
    title: "parent 1",
    key: "0-0",
    // icon: <SmileOutlined />,
    children: [
      {
        title: "leaf",
        key: "0-0-0",
        // icon: <MehOutlined />
      },
      {
        title: "leaf",
        key: "0-0-1",
        // icon: ({ selected }) => (selected ? <FrownFilled /> : <FrownOutlined />)
      }
    ]
  }
];

const TreeDemo = () => {
  const renderTitle = () => {
    return <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <div>jjjj</div>
      <MehOutlined />
    </div>
  }
  return (
    <div style={{ width: 300 }} className={styles.page}>
      <Tree
        showIcon
        defaultExpandAll
        defaultSelectedKeys={["0-0-0"]}
        switcherIcon={<DownOutlined />}
        treeData={treeData}
        titleRender={renderTitle}
        motion={false}
      />
    </div>
  );
};

export default TreeDemo;
