import { useEffect, useState } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample1 = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);
  console.log("SimpleExample");

  useEffect(() => {
    console.log("useEffect every render");
    document.title = counter.toString();
  });

  useEffect(() => {
    console.log("useEffect only first render(componentDidMount)");
    document.title = counter.toString();
  }, []);

  useEffect(() => {
    console.log("useEffect first render and every counter change");
    document.title = counter.toString();
  }, [counter]);

  return (
    <>
      Hello, {counter}
      <button onClick={() => setFake(fake + 1)}>+</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

export const SimpleExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);
  console.log("SimpleExample");

  useEffect(() => {
    setInterval(() => {
      console.log("tick:" + counter);
      setCounter(counter + 1);
    }, 1000);
  }, []);

  return (
    <>
      Hello, counter: {counter} -fake: {fake}
      {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
      {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
    </>
  );
};

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);
  console.log("Component rendering with" + counter);

  useEffect(() => {
    console.log("Effect occurred");

    return () => {
      console.log("Reset effect" + counter);
    };
  }, [counter]);

  return (
    <div>
      Hello, counter:{counter}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export const KeysTrackerExample = () => {
  const [text, setText] = useState("");
  console.log("Component rendering with" + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText(text + e.key);
    };

    window.addEventListener("keypress", handler);
    return () => {
      window.removeEventListener("keypress", handler);
    };
  }, [text]);

  return <div>Typed text:{text}</div>;
};

export const SetTimeOutExample = () => {
  const [text, setText] = useState("");
  console.log("Component rendering with" + text);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      console.log("Timeout expired");
      setText("3 seconds passed");
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [text]);

  return <div>Typed text:{text}</div>;
};
