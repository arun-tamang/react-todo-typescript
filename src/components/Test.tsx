import * as React from 'react';

interface TestProps {
  keyA: string;
  keyB: number;
}

const Test = (props: TestProps) => {
  return (
    <div>
      <p>{props.keyA}</p>
      <p>{props.keyB}</p>
    </div>
  );
};

export default Test;