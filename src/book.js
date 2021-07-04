import React from 'react';

const Book = (props) => {
    const {img, title, author} = props;
    const complexExample = (author) => {
        console.log(author);
    }
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hello World');
    }
    return (
        <article className="book" onMouseOver={() => {
            console.log(author);
        }}>
            <img src={img} alt=""/>
            <h1 onClick={() => {
                console.log(title);
            }}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Click Button</button>
            <button type="button" onClick={() => complexExample(author)}>Click Button 1</button>
        </article>
    );
}

export default Book;