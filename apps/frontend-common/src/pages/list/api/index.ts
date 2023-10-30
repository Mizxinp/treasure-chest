import { http } from 'utils'

export function getList(params: any): any {
  return http.post('https://vms-service.test.tezign.com/material/search/list/pc', params);
}