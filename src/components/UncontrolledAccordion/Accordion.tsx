import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    // const collapsed = false
    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => { setCollapsed(!collapsed)}}>Toggle</button>
        {!collapsed && <AccordionBody/>}
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