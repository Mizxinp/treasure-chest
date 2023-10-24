import React from "react";
import { Layout, Menu, MenuClickEventHandler, GenericItemType } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import RoutePath from "../../router/RoutePath";

const { Header } = Layout;

const items: GenericItemType[] = [
  {
    key: RoutePath.home,
    label: "首页",
  },
  {
    key: RoutePath.charts,
    label: "图表",
  },
];

function PageContainer(props: { children: React.ReactChild }) {
  const navigate = useNavigate();
  const { pathname } = useLocation()

  const handleMenuClick = ({ key }: MenuClickEventHandler) => {
    navigate(key);
  };
  return (
    <div>
      <Layout>
        <Header>
          <Menu
            onClick={handleMenuClick}
            theme="dark"
            mode="horizontal"
            items={items}
            defaultSelectedKeys={[pathname]}
          />
        </Header>
      </Layout>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
}

export default PageContainer;
