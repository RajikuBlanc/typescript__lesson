import React, { useState } from 'react';

interface Props {
  text: string;
}

interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<UserData>({ id: 1, name: 'dummy' });
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };
  return (
    <div>
      <p>{props.text}</p>
      <p>Count: {count}</p>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <input type='text' value={inputData} onChange={handleInputChange} />
      <p>{inputData}</p>
    </div>
  );
};

export default TestComponent;
