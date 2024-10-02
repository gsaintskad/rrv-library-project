import * as a from "./actionTypes";
import { IBook } from "../../src/interfaces";

const initialState: IBook[] = [];

const booksReducer = (state = initialState, action: a.BookAction): IBook[] => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload as IBook];

    case a.REMOVE_BOOK:
      return state.filter(
        (book: IBook) => book.id !== (action.payload as IBook).id,
      );

    case a.TOGGLE_FAVORITE:
      return state.map((b: IBook) => {
        if (b.id === (action.payload as IBook).id) {
          return {
            ...b,
            isFavorite: !(b.isFavorite ?? false), // Toggle the current isFavorite value
          };
        }
        return b; // Return the book unchanged if it's not the one being toggled
      });

    default:
      return state;
  }
};

export default booksReducer;
