import request from '@/utils/request';
import type { TradeMarkResponseData } from '@/api/product/trademark/type';

enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/'
}

export const reqHasTrademark = (currentPage: number, pageSize: number) =>
  request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${currentPage}/${pageSize}`);
