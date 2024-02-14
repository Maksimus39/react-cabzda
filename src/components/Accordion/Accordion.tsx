import React from "react";

type ItemsType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemsType[];
  onClick: (value: any) => void;
};

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}

type AccordionPropsTitleProps = {
  title: string;
  onChange: () => void;
};
const AccordionTitle: React.FC<AccordionPropsTitleProps> = (props) => {
  return <h3 onClick={(event) => props.onChange()}>{props.title}</h3>;
};

type AccordionPropsBody = {
  items: ItemsType[];
  onClick: (value: any) => void;
};

function AccordionBody(props: AccordionPropsBody) {
  return (
    <ul>
      {props.items.map((el, index) => (
        <li
          onClick={() => {
            props.onClick(el.value);
          }}
          key={index}
        >
          {el.title}
        </li>
      ))}
    </ul>
  );
}
