import request from '@/utils/request';

enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/'
}

export const reqHasTrademark = (currentPage: number, pageSize: number) =>
  request.get<any, any>(API.TRADEMARK_URL + `${currentPage}/${pageSize}`);
