import { counterAtom } from 'data/atoms/counterAtoms';
import { useAtom } from 'jotai';

export const Counter = () => {
  const [_, setCounter] = useAtom(counterAtom);
  return (
    <>
      <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCounter(prev => prev - 1)}>Decrement</button>
    </>
  );
};
