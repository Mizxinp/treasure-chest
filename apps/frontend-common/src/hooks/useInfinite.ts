import { useRef } from "react";
import { useInfiniteScroll, InfiniteScrollOptions } from "ahooks";

const PAGE_SIZE = 10;

interface IProps<T, R> {
  initialParams: T;
  service: (params: T) => Promise<R>;
  options?: {
    firstPageFrom?: number;
  } & InfiniteScrollOptions<T>;
}

function useInfinite<T, R>(props: IProps<T, R>) {
  const { initialParams, service, options } = props;

  const params = useRef({
    ...initialParams,
    pageNum: typeof options?.firstPageFrom === 'number' ? options?.firstPageFrom : 1,
    pageSize: PAGE_SIZE,
  });

  const { data, loading, loadMore, loadingMore, noMore } = useInfiniteScroll(
    (currentData: any) => {
      return service(params.current);
    },
    { isNoMore: (res: any) => res && res?.list?.length >= res?.totalCount }
  );

  console.log("list", data);
  console.log("noMore", noMore);

  const handleLoadMore = () => {
    params.current.pageNum++;
    loadMore();
  };

  return { data, loading, loadMore: handleLoadMore, loadingMore, noMore };
}

export default useInfinite;
