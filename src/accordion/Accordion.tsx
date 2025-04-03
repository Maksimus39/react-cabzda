import {AccordionTitle} from "./accordionTitle/AccordionTitle.tsx";
import {AccordionBody} from "./accordionBody/AccordionBody.tsx";

type AccordionProps = {
    title: string;
}
export const Accordion = (props:AccordionProps) => {
    return (
        <>
            <AccordionTitle props={props.title}/>
            <AccordionBody/>
        </>
    )
}