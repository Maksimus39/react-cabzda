import { useCallback, useMemo, useState } from "react";
import * as React from "react";

type BooksArray = {
    books: string[];
    addBook: () => void;
};

const Books = React.memo((props: BooksArray) => {
    console.log("Books render");
    return (
        <div>
            {props.books.map((book) => (
                <div key={book}>{book}</div>
            ))}
            <button onClick={props.addBook}>Add book</button>
        </div>
    );
});

const LikeUseCallBack = () => {
    console.log("LikeUseCallBack render");
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState(["HTML", "CSS", "JS", "React"]);

    const newArray = useMemo(() => {
        return books.filter((u) => u.toLowerCase().includes("a"));
    }, [books]);

    const addBook = useCallback(() => {
        setBooks([...books, "Angular"]);
    }, [books]);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>LikeUseCallBack render</button>
            <Books books={newArray} addBook={addBook} />
            {count}
        </>
    );
};

export default LikeUseCallBack;