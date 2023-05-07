import { http } from 'utils'

export function getAllWebPage(params: any) {
  return http.post("/template/listAllByPage", params);
}
export function testNest() {
  return http.get("/");
}