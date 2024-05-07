import React from "react";
import { ClockAnalogView } from "./Clock";

const get2didgitsString = (num: number) => {
  return num < 10 ? "0" + num : num;
};

export const DigitalClockView: React.FC<ClockAnalogView> = ({ date }) => {
  return (
    <>
      <span>{get2didgitsString(date.getHours())}</span>:
      <span>{get2didgitsString(date.getMinutes())}</span>:
      <span>{get2didgitsString(date.getSeconds())}</span>
    </>
  );
};
