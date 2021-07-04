import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import {Books} from './books';
import Book from './book';

function BookList() {
    return (
        <section className="booklist">
            {Books.map((book, index) => {
                return <Book key={book.id} {...book} />;
            })}
        </section>
    );
}

ReactDom.render(<BookList />, document.getElementById('root'));