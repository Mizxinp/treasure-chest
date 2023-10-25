import SlidingUnlock from '@/components/sliding-unlock';
import Panel from '@/components/panel';

import styles from './index.module.scss';
import ExpandableContent from '@/components/expandable-content';

const content = "这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本这是很长很长的一段文本"

function Widgets() {
  return (
    <div className={styles.page}>
      <Panel title="滑动解锁">
        <SlidingUnlock onSuccess={() => {}}/>
      </Panel>
      <Panel title="展开收起">
        <ExpandableContent content={content}  />
      </Panel>
    </div>
  )
}

export default Widgets;
