import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return <>This is app components</>
}

function Rating() {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function Star() {
    return (
        <div>star</div>
    )
}

function AccordionTitle() {
    return (
        <h3>Меню</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App;
