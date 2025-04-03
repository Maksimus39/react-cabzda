import './App.css'
import {Rating} from "./rating/Rating.tsx";
import {Accordion} from "./accordion/Accordion.tsx";
import {PageTitle} from "./appTitle/AppTitle.tsx";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is App Component"}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <PageTitle title={"This is my Friends"}/>
            <Accordion title={"Title-1"} collapsed={true}/>
            <Accordion title={"Title-2"} collapsed={false}/>
            <Rating/>
        </div>
    )
}

export default App
