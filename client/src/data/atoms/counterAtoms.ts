import { atom } from 'jotai';

export const counterAtom = atom(0);
export const doubledCounterAtom = atom(get => get(counterAtom) * 2);
