type EnqueueRequest<T> = () => Promise<T>;
const MAX_REQUESTS_COUNT = 100;

/**
 * 控制并发请求数量，始终维持最大并发请求量，动态增加删除
 */
class RequestQueue<T> {
  private requestQueue: (() => Promise<T>)[] = [];
  private currentRequestCounts = 0;
  private maxRequestCount = 0;

  constructor(maxCount: number) {
    this.maxRequestCount = maxCount ?? MAX_REQUESTS_COUNT;
  }

  public enqueue(request: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const enqueueRequest = async () => {
        this.currentRequestCounts++;
        try {
          const result = await request();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          this.currentRequestCounts--;
          this.updateQueue();
        }
      };
      if (this.currentRequestCounts < this.maxRequestCount) {
        enqueueRequest();
      } else {
        this.requestQueue.push(enqueueRequest as unknown as EnqueueRequest<T>);
      }
    });
  }

  public requestAll(requests: (() => Promise<T>)[]): Promise<T[]> {
    const promises = requests?.map(request => this.enqueue(request));
    return Promise.all(promises);
  }

  private updateQueue() {
    if (this.currentRequestCounts < this.maxRequestCount && this.currentRequestCounts > 0) {
      const request = this.requestQueue.shift();
      request && request();
    }
  }
}

export default RequestQueue;