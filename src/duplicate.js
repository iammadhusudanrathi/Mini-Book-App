import React from 'react'
import ReactDom from 'react-dom';

// function Greeting() {
//     return <h4>This is Madhusudan and This is my first Component.</h4>;
// }

// function Greeting() {
//     return (
//         <div>
//             <h4>This is Madhusudan and This is my first Component.</h4>
//         </div>
//     );
// }

// function Greeting() {
//     return (
//         <div>
//             <h3>Hello People</h3>
//             <ul>
//                 <li>
//                     <a href='#'>Hello World</a>
//                 </li>
//             </ul>
//         </div>
//     );
// }

function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
}

const Person = () => {
    return <h2>John Doe</h2>;
}

const Message = () => {
    return <p>This is my message.</p>;
}

// const Greeting = () => {
//     return React.createElement(
//         'h1',
//         {},
//         'Hello World'
//     );
// }

// const Greeting = () => {
//     return React.createElement(
//         'h1',
//         {},
//         React.createElement(
//             'h1',
//             {},
//             'Hello World'
//         )
//     );
// }

ReactDom.render(<Greeting />, document.getElementById('root'));