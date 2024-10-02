import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../../interfaces.ts";
import "./BookList.css";

import { removeBook ,toggleFavorite} from "../../../redux/books/actionCreators.ts";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
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
              <div className={"book-actions"}>
                {book.isFavorite ? (
                  <BsBookmarkStarFill className={"star-icon"} onClick={()=>dispatch(toggleFavorite(book))}/>
                ) : (
                  <BsBookmarkStar className="star-icon" onClick={()=>dispatch(toggleFavorite(book))}/>
                )}
                <button onClick={() => dispatch(removeBook(book))}>
                  delete
                </button>
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
