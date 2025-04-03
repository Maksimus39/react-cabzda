
type AppTitleProps = {
    title:string
}
export function PageTitle(props: AppTitleProps) {
    return (
        <h2>{props.title}</h2>
    )
}