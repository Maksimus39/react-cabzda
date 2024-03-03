import React, { useCallback, useMemo, useState } from "react";

export default {
  title: "useMemo",
};

export const DifficultCountingExample = () => {
  const [a, setA] = useState(5);
  const [b, setB] = useState(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input value={a} onChange={(event) => setA(+event.currentTarget.value)} />
      <input
        value={b}
        onChange={(event) => setB(Number(event.currentTarget.value))}
      />
      <hr />
      <div>Result for a:{resultA}</div>
      <div>Result for b:{resultB}</div>
    </>
  );
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("USERS SECRET");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
  console.log("EXAMPLES");
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState<string[]>(["Dimych", "Valera", "Artem"]);

  const newArray = useMemo(() => {
    const newArray = users.filter((u) => u.toLowerCase().indexOf("a") > -1);
    return newArray;
  }, [users]);

  const addUser = () => {
    const newUsers = [...users, "Sveta " + new Date().getTime()];
    setUsers(newUsers);
  };

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          addUser();
        }}
      >
        add user
      </button>
      {counter}
      <Users users={newArray} />
    </>
  );
};

export const LikesUseCallback = () => {
  console.log("LikesUseCallback");
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState<string[]>(["React", "JS", "CSS", "HTML"]);

  // const addBook = () => {
  //   const newUsers = [...books, "Angular " + new Date().getTime()];
  //   setBooks(newUsers);
  // };
  const memoizedAddBook = useMemo(() => {
    return () => {
      const newUsers = [...books, "Angular " + new Date().getTime()];
      setBooks(newUsers);
    };
  }, [books]);

  const memoizedAddBook2 = useCallback(() => {
    console.log(books);
    const newUsers = [...books, "Angular " + new Date().getTime()];
    setBooks(newUsers);
  }, [books]);

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      {counter}
      <Book addBook={memoizedAddBook2} />
    </>
  );
};

type BookSecretPropsType = {
  addBook: () => void;
};

const BooksSecret = (props: BookSecretPropsType) => {
  console.log("BooksSecret");
  return (
    <div>
      <button
        onClick={() => {
          props.addBook();
        }}
      >
        add book
      </button>
    </div>
  );
};
const Book = React.memo(BooksSecret);
