import {IBook} from "../../src/interfaces.ts";

export interface BookAction {
    type: string;
    payload?:IBook;
}
export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
