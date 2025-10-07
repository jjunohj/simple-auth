import { Counter } from 'components/Counter';
import { DoubleCounter } from 'components/DoubleCounter';
import { counterAtom } from 'data/atoms/counterAtoms';
import { useAtom } from 'jotai';

export function HomePage() {
  const [counter] = useAtom(counterAtom);
  return (
    <>
      <h1>Counter {counter}</h1>
      <Counter />
      <DoubleCounter />
    </>
  );
}
