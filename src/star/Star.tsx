type StarProps = {
    selected?: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

export const Star = (props: StarProps) => {

    const valueHandler = () => {
        props.setValue(props.value)
    }

    return (
        <span>
             <span onClick={valueHandler}>
                     {props.selected ? <b>star </b> : "star "}
               </span>
        </span>
    )
}