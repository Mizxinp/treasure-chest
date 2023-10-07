import { io, Socket } from 'socket.io-client';

class WebSocketClient {
  private socket: Socket | undefined;
  private url: string;
  constructor(url: string) {
    this.url = url;
    this.connect();
  }
  public connect() {
    this.socket = io(this.url);
    this.socket.on('connect', () => {
      console.log('socket', this.socket);

      console.info('websocket连接成功');
    });
    this.socket.on('disconnect', () => {
      console.error('websocket断开连接');
    });
    this.socket.on('error', () => {
      console.error('websocket连接失败');
    });
  }

  public close() {
    this.socket?.close();
  }

  public getConnected() {
    return this.socket?.connected;
  }

  public sendMessage<T, S>(eventName: string, sendData: T):Promise<S> {
    return new Promise((resolve) => {
      this.socket?.emit(eventName, sendData, (response: S) => {
        // TODO response哪些代表失败code, 添加reject
        resolve(response);
      });
    });
  }

  public listen(eventName: string, callBack: (response: any)=>void) {
    this.socket?.on(eventName, (response: string)=>{
      try {
        callBack(JSON.parse(response));
      } catch (e) {
        console.error('处理失败', e);
        return Promise.reject(e);
      }
    });
  }

  public off(eventName) {
    this.socket?.off(eventName);
  }
}

export default WebSocketClient;