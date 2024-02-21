import { IPayloadPagination, IResponse } from "@/utils/types/api";
import { IBook } from "./type";
import { booksSampleData } from "./sample-data";

export const getBooks = async () => {
  return new Promise<IResponse<IPayloadPagination<IBook[]>>>((resolve) => {
    setTimeout(() => {
      const response: IResponse<IPayloadPagination<IBook[]>> = {
        message: "Success get books",
        payload: {
          totalItems: 10,
          datas: booksSampleData,
          totalPages: 1,
          currentPage: 1,
        },
      };

      resolve(response);
    }, 1000);
  });
};

// TODO: Add path param
export const getDetailBook = async () => {
  return new Promise<IResponse<IPayloadPagination<IBook>>>((resolve) => {
    setTimeout(() => {
      const response: IResponse<IPayloadPagination<IBook>> = {
        message: "Success get books",
        payload: {
          totalItems: 10,
          datas: booksSampleData[0],
          totalPages: 1,
          currentPage: 1,
        },
      };

      resolve(response);
    }, 1000);
  });
};
