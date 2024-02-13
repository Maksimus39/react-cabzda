import React, { ChangeEvent, useRef, useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "input",
};

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        onChange={(event) => {
          const actualValue = event.currentTarget.value;
          setValue(actualValue);
        }}
      />{" "}
      -{value}
    </>
  );
};

export const GetValueOfUncontrolledButtonPress = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={save}>save</button>- actual value:{value}
    </>
  );
};
export const ControlledInputWithFixedValue = () => (
  <input value={"it-incubator.by"} />
);

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");

  // return <input value={parentValue} onChange={action("want to change")} />;
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setParentValue(event.currentTarget.value);
  };

  return <input value={parentValue} onChange={onChange} />;
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setParentValue(event.currentTarget.checked);
  };

  // return <input type="checkbox" checked={parentValue} onChange={onChange} />;
  return (
    <input
      type="checkbox"
      checked={parentValue}
      onChange={action("want changes")}
    />
  );
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("1");

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(event.currentTarget.value);
  };

  return (
    <select value={parentValue} onChange={onChange}>
      <option>none</option>
      <option value={"1"}>Minsk</option>
      <option value={"2"}>Kiev</option>
      <option value={"3"}>Moscow</option>
      <option value={"4"}>Dirt</option>
    </select>
  );
};
