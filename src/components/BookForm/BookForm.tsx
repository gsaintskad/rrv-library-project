import "./BookForm.css";
import { useState } from "react";

import { BookFormState } from "../../interfaces.ts";
import { useDispatch } from "react-redux";
import { addBook } from "../../../redux/books/actionCreators.ts";
import randomBooks from "../../../books.json";

let lastID = 0;
const setID = () => {
  return ++lastID;
};

const BookForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
  } as BookFormState);
  const dispatch = useDispatch();

  function handleAddRandomBook() {
    const book = randomBooks[Math.floor(Math.random() * randomBooks.length)];
    dispatch(addBook({ id: setID(), author: book.author, title: book.title }));
  }

  return (
    <div className="app-block book-form">
      <h2>BookForm</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formData.title && formData.author) {
            console.log(formData);
            dispatch(addBook({ id: setID(), ...formData }));
            setFormData({ author: "", title: "" });
          }
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="autor"
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            value={formData.author}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add a random book
        </button>
      </form>
    </div>
  );
};
export default BookForm;
