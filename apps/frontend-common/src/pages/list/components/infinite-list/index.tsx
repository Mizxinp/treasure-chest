import React, { useRef } from 'react';
import { useInfiniteScroll } from 'ahooks';
import LoadMore from '@/components/load-more';
import { getList } from '../../api';
import styles from './index.module.scss'

function Card(props: any) {
  const { name } = props;
  return (
    <div className={styles.card}>
      {name}
    </div>
  );
}

const pageSize = 10;

const InfiniteList = () => {
  const pageNum = useRef(0)
  const { data, loading, loadMore, loadingMore, noMore } = useInfiniteScroll((currentData: any) => {
    console.log('currentData', currentData);

    const params: any = {
      endPoint: pageNum.current + pageSize,
      filterMap: {},
      sort: { name: 'updateTime', value: 'desc' },
      startPoint: pageNum.current
    };
    return getList(params);
  }, { isNoMore: (res: any) => res && (res?.list?.length >= res?.totalCount) });

  console.log('list', data);
  console.log('noMore', noMore);

  const nextPage = () => {
    pageNum.current = pageNum.current + pageSize;
  }

  const handleLoadMore = () => {
    nextPage();
    loadMore();
  };


  return (
    <div>
      { data?.list?.map(item => <Card key={ item.assetId } { ...item } />) }
      <LoadMore visible={data && (data.list.length < data.totalCount)} disabled={loading || loadingMore} onEnter={handleLoadMore} />
    </div>
  );
};

export default InfiniteList