type StarProps = {
    selected: boolean
}

export const Star = (props: StarProps) => {
    const {selected} = props
    return (
        <>
            {selected
                ? <span> <b>Star:- </b></span>
                : <span>Star:- </span>}
        </>
    )
}