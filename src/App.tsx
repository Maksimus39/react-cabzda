import './App.css'
import {Rating} from "./rating/Rating.tsx";
import {Accordion} from "./accordion/Accordion.tsx";
import {AppTitle} from "./appTitle/AppTitle.tsx";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    )
}

export default App
