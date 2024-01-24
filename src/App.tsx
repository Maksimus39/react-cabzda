import React, {useState} from 'react';
import './App.css';


import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/onOff/onOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, ValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {
    // это state для компоненты Rating
    let [ratingValue, setRatingValue] = useState<ValueType>(0)
    // это state для компоненты Accordion
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    // это state для компоненты OnOff
    let [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className="App">
            {/*<img*/}
            {/*    src="https://avatars.mds.yandex.net/i?id=f9af22afacc4b1040b23ceb0c98f67045db6cb1e-9456276-images-thumbs&n=13"*/}
            {/*    alt="react"/>*/}
            {/*<hr/>*/}
            {/*<PageTitle title={"This is app components"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}


            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<hr/>*/}

            {/*<Accordion titleValue={"Menu"} collapsed={accordionCollapsed}*/}
            {/*           onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={accordionCollapsed}*/}
            {/*           onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
            {/*<hr/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu-2"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users-2"}/>*/}

            {/*<hr/>*/}
            {/*<UncontrolledRating/>*/}

            {/*<hr/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<hr/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
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
