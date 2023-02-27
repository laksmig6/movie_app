import React, { useState } from "react";
import WithCounter from "./withCounter";

const ClickCounter = () => {
  const { count, increaseCount } = this.props;
  return (
    <div>
      <button onClick={increaseCount}>clicked {count} times</button>
    </div>
  );
};

export default WithCounter(ClickCounter);
