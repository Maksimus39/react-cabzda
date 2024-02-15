import React, { useReducer } from "react";
import { reducer } from "./reducer";

type AccordionPropsType = {
  titleValue: string;
  // collapsed: boolean
};

// --------------------------------------------------------------------------------------------------------------
export function UncontrolledAccordion(props: AccordionPropsType) {
  //  const [collapsed, setCollapsed] = useState(false);
  const [state, dispatch] = useReducer(reducer, { collapsed: true });

  return (
    <div>
      {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>;*/}
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          dispatch({ type: "TOGGLE-COLLAPSED" });
        }}
      />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionPropsTitleProps = {
  title: string;
  onClick: () => void;
};
const AccordionTitle: React.FC<AccordionPropsTitleProps> = (props) => {
  return <h3 onClick={() => props.onClick()}>{props.title}</h3>;
};

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
