import {useState} from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books?pageSize=30"
    );

    setBooks(response.data);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch API Data and display it - 1 of 3</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(", ");

            return (
              <div className="book" key={index}>
                <div className="book-header">
                  <h3>Book {index + 1}</h3>
                  <h2>{book.name}</h2>
                </div>
                <div className="book-details">
                  <p>Author: {authors}</p>
                  <p>Pages: {book.numberOfPages}</p>
                  <p>Country: {book.country}</p>
                  <p>Release Date: {cleanedDate}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
