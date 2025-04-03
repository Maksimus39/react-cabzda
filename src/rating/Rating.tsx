import {Star} from "../star/Star.tsx";

type Props = {
    value?: number;
}
export const Rating = (props:Props) => {
    return (
        <div>
            <Star selected={true} />
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    )
}


