import * as a from "./actionTypes";
import { IBook } from "../../src/interfaces";

const initialState: IBook[] = [];

const booksReducer = (state = initialState, action: a.BookAction): IBook[] => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload as IBook];
    case a.REMOVE_BOOK:
      return[...state.filter((book: IBook) => book.id !== action.payload!.id)];
    default:
      return state;
  }
};
export default booksReducer;
