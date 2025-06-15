import {useState} from "react";
import * as React from "react";

const Counter = (props: { count: number }) => {
    console.log('Counter')
    return <div>{props.count}</div>
}

type UsersArray = {
    users: string[]
}
const Users = React.memo((props: UsersArray) => {
    console.log('USERS')
    return props.users.map((u, i) => <div key={i}>{u}</div>)
})

// const UsersMemo = React.memo(Users)

const ReactMemo = () => {
   // console.log('REACT_MEMO')
    const [count, setCount] = useState(0)
    const [users] = useState(['Max', 'Larisa', 'Andrey', 'Bogdan'])

    const setCountHandler = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={setCountHandler}>+</button>
            <Users users={users}/>
            <Counter count={count}/>
        </>
    );
};

export default ReactMemo;