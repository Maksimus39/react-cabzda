import {Star} from "../star/Star.tsx";

type RatingProps = {
    value?: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Rating = (props: RatingProps) => {
    const { value = 0 } = props; // Provide a default value of 0
    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
        </div>
    )
}
