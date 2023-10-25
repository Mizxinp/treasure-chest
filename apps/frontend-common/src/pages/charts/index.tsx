import Panel from '@/components/panel';
import PieChart from '@/components/charts/PieChart';
import LineChart from '@/components/charts/LineChart';
import BarChart from '@/components/charts/BarChart';
// import ChinaMap from '@/components/charts/ChinaMap';

import styles from './index.module.scss';

import { mockPieData, mockLineData, mockBarData } from '@/mock/charts'


function Home() {
  return (
    <div className={styles.page}>
      <Panel title="饼图">
        <div className={styles.content}>
          <PieChart pieData={mockPieData} className={styles.card} />
          <PieChart pieData={mockPieData} className={styles.card} />
        </div>
      </Panel>
      <Panel title="折线图">
        <LineChart lineData={mockLineData} lineName="数据" />
      </Panel>
      <Panel title="柱状图">
        <BarChart barData={mockBarData} name="一周数据" />
      </Panel>
      {/* <Panel title="中国地图">
        <ChinaMap mapData={chinaMapData} />
      </Panel> */}
    </div>
  )
}

export default Home;
