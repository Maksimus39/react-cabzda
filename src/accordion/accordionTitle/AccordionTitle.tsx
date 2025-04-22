type Props = {
    title: string
    uncontrolAccordion?: () => void;
}
export const AccordionTitle = (props: Props) => {
    return (
        <>
            <h3 onClick={props.uncontrolAccordion}>{props.title}</h3>
        </>
    );
};
