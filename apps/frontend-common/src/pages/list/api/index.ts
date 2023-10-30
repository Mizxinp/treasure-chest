import { http } from 'utils'

export function getList(params: any): any {
  return http.post('/material/search/list/pc', params);
}