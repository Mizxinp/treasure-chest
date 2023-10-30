import { Tabs } from 'antd';
import styles from './index.module.scss'
import InfiniteList from './components/infinite-list';

const items = [
  {
    key: '1',
    label: '列表',
    children: <InfiniteList />
  }
]

const DailyTest = () => {
  return (
    <div className={styles.page}>
      <Tabs defaultActiveKey='1' items={items} />
    </div>
  );
};

export default DailyTest;
