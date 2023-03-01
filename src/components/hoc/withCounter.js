import React from "react";

const WithCounter = (OriginalComponent) => {
  const [count, setCount] = React.useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const NewComponent = () => {
    return <OriginalComponent count={count} increaseCount={increaseCount} />;
  };
  return NewComponent;
};

export default WithCounter;
