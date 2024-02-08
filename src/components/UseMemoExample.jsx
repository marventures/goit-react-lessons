import { useState, useMemo } from 'react';

export const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  // this calculation is not memoized, that means every time the component re-renders, this calculation will run again, even if the values of a and b haven't changed.
  //   console.log('Counting value');
  //   const value = a + b;

  const memoizedValue = useMemo(() => {
    console.log('Counting memoizedValue');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <button onClick={() => setA(a + 1)}>update a: {a}</button>
      <button onClick={() => setB(b + 1)}>update b: {b}</button>
      <button onClick={() => setC(c + 1)}>update c: {c}</button>
      {/* <p>value: {value}</p> */}
      <p>memoizedValue: {memoizedValue}</p>
    </div>
  );
};
