export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

export interface TradeMark {
  id?: number;
  tmName: string;
  logoUrl: string;
}

// 包含全部品牌数据的Ts类型
export type Records = TradeMark[];

// 获取的已有全部品牌数据的Ts类型
export interface TradeMarkResponseData extends ResponseData {
  data: {
    records: Records;
    total: number;
    size: number;
    current: number;
    searchCount: boolean;
    page: number;
  };
}
