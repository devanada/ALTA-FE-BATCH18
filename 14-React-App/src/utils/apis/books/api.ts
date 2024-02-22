import { IPayloadPagination, IResponse } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { IBook } from "./type";

export const getBooks = async () => {
  try {
    const response = await axiosWithConfig.get("/books");

    return response.data as IResponse<IPayloadPagination<IBook[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailBook = async (id_book: string) => {
  try {
    const response = await axiosWithConfig.get(`/books/${id_book}`);

    return response.data as IResponse<IBook>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addNewBook = async (body: any) => {
  try {
    const formData = new FormData();

    let key: keyof typeof body;
    for (key in body) {
    }
    // TODO: Finish this function when admin page is exist

    const response = await axiosWithConfig.post("/books", formData);
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
