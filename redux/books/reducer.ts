import * as a from "./actionTypes";
import { IBook } from "../../src/interfaces";

const initialState: IBook[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
  },
  // Add more books as needed
];

const booksReducer = (state = initialState, action: a.Action): IBook[] => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload as IBook];
    default:
      return state;
  }
};
export default booksReducer;
