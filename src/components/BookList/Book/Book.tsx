import { IBook } from "../../../interfaces.ts";
import './Book.css'
const Book = (props:{book: IBook}) => {
  return (
    <div className="book">
      <h2>{props.book.title!}</h2>
      <h3>{props.book.author!}</h3>
    </div>
  );
};
export default Book;