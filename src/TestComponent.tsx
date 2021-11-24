import React from 'react';

interface Props {
  text: string;
}

const TestComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

export default TestComponent;
