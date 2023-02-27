import React from "react";
import ClickCounter from "../components/hoc/clickCounter";
import HoverCounter from "../components/hoc/hoverCounter";

const Example = () => {
  return (
    <div className="mt-5">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
};

export default Example;
