import {useState} from "react";


export function OnOff() {
    const [color, setColor] = useState(false)

    const onClickHandler = () => {
        setColor(true)
    }

    const offClickHandler = () => {
        setColor(false)
    }


    const onStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "5px",
        border: "2px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: color ? "green" : "white",
    }
    const offStyle = {
        width: "40px",
        height: "40px",
        borderRadius: "5px",
        border: "2px solid black",
        display: "inline-block",
        marginLeft: "25px",
        padding: "5px",
        backgroundColor: color ? "white" : "red",
    }

    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginTop: "10px",
        marginLeft: "25px",
        backgroundColor: color ? "green" : "red",
    }


    return <div>
        <div style={onStyle} onClick={onClickHandler}>On:</div>
        <div style={offStyle} onClick={offClickHandler}>Off:</div>
        <div style={indicatorStyle}></div>
    </div>
}