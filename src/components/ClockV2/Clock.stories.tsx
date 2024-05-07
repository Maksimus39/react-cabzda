import { ClockV2 } from "./Clock";
import React from "react";

export default {
  title: "ClockV2",
  component: ClockV2,
};

export const BaseAnalogExample = () => {
  return <ClockV2 mode={"analog"} />;
};

export const BaseDigitalExample = () => {
  return <ClockV2 mode={"digital"} />;
};
