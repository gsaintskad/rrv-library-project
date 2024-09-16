import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../../interfaces.ts";
import "./BookList.css";
import Book from "./Book/Book.tsx";
import { removeBook } from "../../../redux/books/actionCreators.ts";
const BookList = () => {
  const books = useSelector((state: { books: IBook[] }) => state.books);
  const dispatch = useDispatch();

  return (
    <div className="app-block book-list">
      <h1>Book List</h1>
      {books.length ? (
        <ul>
          {books.map((book: IBook, index) => (
            <li key={book.id}>
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.author}</strong>
              </div>
              <button
                className={"book-actions"}
                onClick={() => dispatch(removeBook(book))}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2>no available books</h2>
      )}
    </div>
  );
};
export default BookList;
