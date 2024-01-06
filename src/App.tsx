import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            this is app components
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Star() {
     return (
         <div>star</div>
     )
}

export default App;
