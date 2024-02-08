import { useRef } from 'react';

export const UseRefExample = () => {
  // Create a ref using useRef
  const inputRef = useRef(null);

  const focusInput = () => {
    // Access the DOM element using .current
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="type your name..." />

      {/* Do you think this will work?*/}
      <input
        ref={inputRef}
        type="password"
        placeholder="type your password..."
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
