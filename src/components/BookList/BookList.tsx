import { useSelector } from "react-redux";
import { IBook } from "../../interfaces.ts";
import "./BookList.css";
import Book from "./Book/Book.tsx";
const BookList = () => {
  const books = useSelector((state: { books: IBook[] }) => state.books);
  return (
    <div className="app-block book-list">
      <h1>Book List</h1>
      {books.length ? (
        <ul>
          {books.map((book: IBook) => (
            <li key={book.title}>
              <div className="book-info">
                {book.title} by <strong>{book.author}</strong>
              </div>
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
