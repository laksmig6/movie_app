import React from "react";
import WithCounter from "./withCounter";

const ChildHeader = () => {
  const { count, increaseCount } = this.props;
  return (
    <WithCounter>
      <h2 onMouseOver={increaseCount}>hovered {count} times</h2>
    </WithCounter>
  );
};

const HoverCounter = () => {
  return (
    <div>
      <ChildHeader />
    </div>
  );
};

export default HoverCounter;
