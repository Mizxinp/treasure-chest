import LoadMore from '@/components/load-more';
import { getList } from '../../api';
import styles from './index.module.scss'
import useInfinite from '@/hooks/useInfinite';

function Card(props: any) {
  const { name } = props;
  return (
    <div className={styles.card}>
      {name}
    </div>
  );
}

const InfiniteList = () => {
  const initialParams = {
    endPoint: 10,
    filterMap: {},
    sort: { name: 'updateTime', value: 'desc' },
    startPoint: 0
  }

  const fetchList = (params: any) => {
    const { pageNum, pageSize, ...nest } = params
    const startPoint = pageNum * pageSize;
    const endPoint = startPoint + pageSize;
    return getList({ ...nest, startPoint, endPoint })
  }

  const { data, loading, loadMore, loadingMore } = useInfinite({ initialParams, service: fetchList, options: { firstPageFrom: 0 }})


  return (
    <div>
      { data?.list?.map(item => <Card key={ `${item.assetId}-${item.name}` } { ...item } />) }
      <LoadMore visible={data && (data.list.length < data.totalCount)} disabled={loading || loadingMore} onEnter={loadMore} />
    </div>
  );
};

export default InfiniteList