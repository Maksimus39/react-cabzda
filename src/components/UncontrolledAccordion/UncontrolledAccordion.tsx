import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    // const collapsed = false
    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed)}}/>
        {/*<button onClick={() => { setCollapsed(!collapsed)}}>Toggle</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}


type AccordionPropsTitleProps = {
    title: string
    onClick:()=>void
}
const AccordionTitle: React.FC<AccordionPropsTitleProps> = (props) => {
    return (
        <h3 onClick={()=>props.onClick()}>{props.title}</h3>
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