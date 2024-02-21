export interface IResponse<TPayload> {
  message: string;
  payload: TPayload;
}

export interface IPayloadPagination<TDatas> {
  totalItems: number;
  datas: TDatas;
  totalPages: number;
  currentPage: number;
}
