import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}


export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}



type AccordionPropsTitleProps = {
    title: string
}
const AccordionTitle: React.FC<AccordionPropsTitleProps> = (props) => {
    return (
        <h3>{props.title}</h3>
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