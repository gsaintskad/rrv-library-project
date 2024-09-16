import * as a from './actionTypes'
import {IBook} from "../../src/interfaces";

export const addBook=(newBook:IBook):a.Action=>{
    return{
        type:a.ADD_BOOK,
        payload:newBook
    }
}