import { Accordion } from "./Accordion";
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  component: Accordion,
};

const onChangeHandler = action("onChange");
const onClickHandler = action("onClick");

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue={"Collapsed Accordion"}
      collapsed={true}
      onChange={onChangeHandler}
      items={[]}
      onClick={onClickHandler}
    />
  );
};

export const OpenedAccordion = () => {
  return (
    <Accordion
      titleValue={"Opened Accordion"}
      collapsed={false}
      onChange={onChangeHandler}
      items={[
        { title: "Macsim", value: 1 },
        { title: "Larisa", value: 2 },
        { title: "Andrey", value: 3 },
        { title: "Bogdan", value: 4 },
      ]}
      onClick={onClickHandler}
    />
  );
};

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Accordion
      titleValue={"Accordion"}
      collapsed={collapsed}
      onChange={() => {
        setCollapsed(!collapsed);
      }}
      items={[
        { title: "Macsim", value: 1 },
        { title: "Larisa", value: 2 },
        { title: "Andrey", value: 3 },
        { title: "Bogdan", value: 4 },
      ]}
      onClick={(value) => {
        alert(`user with ID ${value} should be happy`);
      }}
    />
  );
};
