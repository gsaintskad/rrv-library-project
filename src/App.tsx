import { useState } from "react";

import "./App.css";

import BookForm from "./components/BookForm/BookForm.tsx";
import BookList from "./components/BookList/BookList.tsx";
import Filter from "./components/Filter/Filter.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Vite + React + Redux</h1>
      </header>

      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          {/*<Filter />*/}
          <BookList />
        </div>
      </main>
    </div>
  );
}

export default App;
