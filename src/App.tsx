import './App.css'
import LikeUseCallBack from "./useCallback/UseCallBack.tsx";

function App() {
    // const [uncontrolAccordion, setUncontrolAccordion] = useState(false);

    return (
        <div className="App">
            {/*<PageTitle title={"This is App Component"}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<PageTitle title={"This is my Friends"}/>*/}


            {/*<Accordion title={"Title-1"} collapsed={true}/>*/}
            {/*<Accordion title={"Title-2"} collapsed={false}/>*/}


            {/*<Rating/>*/}


            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}


            {/*<UncontrolledAccordion title={"Uncontrolled---------------"}*/}
            {/*                       uncontrolAccordion={() => setUncontrolAccordion(!uncontrolAccordion)}/>*/}
            {/*<UncontrolledAccordion title={"Uncontrolled-2"}/>*/}

            {/*<UncontrolledRating/>*/}

       <LikeUseCallBack/>
        </div>
    )
}

export default App
