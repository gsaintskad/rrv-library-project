import * as a from "./actionTypes";
import { IBook } from "../../src/interfaces";

export const addBook = (newBook: IBook): a.BookAction => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};
export const removeBook = (book: IBook): a.BookAction => {
  return {
    type: a.REMOVE_BOOK,
    payload: book,
  };
};
export const toggleFavorite = (book: IBook): a.BookAction => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: book,
  };
};
