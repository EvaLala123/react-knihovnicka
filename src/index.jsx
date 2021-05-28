import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import Book from './Book';
import { books } from './books';
import Header from './Header';

const App = () => {
  const [library, setLibrary] = useState(books);

  const update = (id) => {
    console.log(id);
    const newLibrary = [].concat(library);
    const book = newLibrary.find((book) => book.id === id);
    book.read = !book.read;
    setLibrary(newLibrary);
  };

  return (
    <>
      <Header />
      <p>Celkem přečteno knih: {library.filter((book) => book.read).length}</p>
      <div className="library">
        {library.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            cover={book.cover}
            read={book.read}
            handleUpdate={update}
          />
        ))}
      </div>
    </>
  );
};
render(<App />, document.querySelector('#app'));
