import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Book } from './Book';
import { books } from './books';

function BookList() {
    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className='booklist'>
                {books.map((book, index) => {
                    return <Book{...book} key={book.id} number={index} />;
                })}
            </section>
        </>
    );
}

// function Greeting() {
//     return React.createElement('div', {}, React.createElement('h1', {}, 'hello world1'))
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
