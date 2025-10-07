import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

export const asyncUserAtom = atom(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  return data;
});

export const loadableUserAtom = loadable(asyncUserAtom);
