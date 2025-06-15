import {useMemo, useState} from "react";
import * as React from "react";

type UsersArray = {
    users: string[]
}
const Users = React.memo((props: UsersArray) => {
    console.log('USERS')
    return props.users.map((u, i) => <div key={i}>{u}</div>)
})

const ReactMemo = () => {
    console.log('REACT_MEMO')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Max', 'Larisa', 'Andrey', 'Bogdan'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Sveta']
        setUsers(newUser)
    }

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => addUser()}>add users</button>
            <Users users={newArray}/>
            {count}
        </>
    );
};

export default ReactMemo;