import {AccordionTitle} from "../accordion/accordionTitle/AccordionTitle.tsx";
import {AccordionBody} from "../accordion/accordionBody/AccordionBody.tsx";
import {useState} from "react";


type AccordionProps = {
    title: string
    uncontrolAccordion?: () => void;
}
export const UncontrolledAccordion = (props: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const collapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.title}
                            uncontrolAccordion={props.uncontrolAccordion}/>
            <button onClick={collapsedHandler}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}