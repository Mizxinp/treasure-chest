import http from '@/common/util/axiosHttp'

export function getAllWebPage(params: any) {
  return http.post("/template/listAllByPage", params);
}