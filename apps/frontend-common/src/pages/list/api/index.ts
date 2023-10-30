import http from '@tezign/http/lib/damHttp';

export function getList(params: any): any {
  return http.post('/material/search/list/pc', params);
}