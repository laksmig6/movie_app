import React, { useState } from "react";
import WithCounter from "./withCounter";

const HoverCounter = () => {
  const { count, increaseCount } = this.props;
  return (
    <div>
      <h2 onMouseOver={increaseCount}>hovered {count} times</h2>
    </div>
  );
};

export default WithCounter(HoverCounter);
