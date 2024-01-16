import React from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <img src="https://avatars.mds.yandex.net/i?id=f9af22afacc4b1040b23ceb0c98f67045db6cb1e-9456276-images-thumbs&n=13" alt="react"/>

            <PageTitle title={"This is app components"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>


            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>



            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsTitle={
    title:string
}
const PageTitle:React.FC<PageTitlePropsTitle>=(props)=> {
    return <h1>{props.title}</h1>
}


export default App;
