import request from '@/utils/request';
import type { TradeMarkResponseData, TradeMark } from '@/api/product/trademark/type';

enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/',
  ADD_TRADEMARK_URL = '/admin/product/baseTrademark/save',
  UPDATE_TRADEMARK_URL = '/admin/product/baseTrademark/update',
  DELETE_URL = '/admin/product/baseTrademark/remove/'
}

export const reqHasTrademark = (currentPage: number, pageSize: number) =>
  request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${currentPage}/${pageSize}`);

export const reqAddOrUpdateTradeMark = (data: TradeMark) => {
  if (data.id) {
    return request.put<any, any>(API.UPDATE_TRADEMARK_URL, data);
  } else {
    return request.post<any, any>(API.ADD_TRADEMARK_URL, data);
  }
};

export const reqDeleteTradeMark = (id: string) => request.delete<any, any>(API.DELETE_URL + id);
