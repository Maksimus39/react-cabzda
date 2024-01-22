import React, {useState} from 'react';
import './App.css';


import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/onOff/onOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, ValueType} from "./components/Rating/Rating";




function App() {

    let [ratingValue, setRatingValue] = useState<ValueType>(0)


    return (
        <div className="App">
            {/*<img src="https://avatars.mds.yandex.net/i?id=f9af22afacc4b1040b23ceb0c98f67045db6cb1e-9456276-images-thumbs&n=13" alt="react"/>*/}

            {/*<PageTitle title={"This is app components"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}


            <OnOff/>


            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={false}/>


            <UncontrolledAccordion titleValue={"Menu-2"}/>
            <UncontrolledAccordion titleValue={"Users-2"}/>


            <UncontrolledRating/>


            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsTitle = {
    title: string
}
const PageTitle: React.FC<PageTitlePropsTitle> = (props) => {
    return <h1>{props.title}</h1>
}


export default App;
