import { doubledCounterAtom } from 'data/atoms/counterAtoms';
import { useAtom } from 'jotai';

export const DoubleCounter = () => {
  const [doubledCounter] = useAtom(doubledCounterAtom);
  return <>{doubledCounter}</>;
};
