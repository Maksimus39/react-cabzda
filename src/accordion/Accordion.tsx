import {AccordionTitle} from "./accordionTitle/AccordionTitle.tsx";
import {AccordionBody} from "./accordionBody/AccordionBody.tsx";

type AccordionProps = {
    title: string;
    collapsed: boolean;
}
export const Accordion = (props: AccordionProps) => {
    return (
        <>
            {props.collapsed
                ? <div>
                    <AccordionTitle title={props.title}/>
                </div>
                : <div>
                    <AccordionTitle title={props.title}/>
                    <AccordionBody/>
                </div>
            }
        </>
    )
}