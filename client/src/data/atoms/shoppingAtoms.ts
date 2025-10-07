import { atom } from 'jotai';

export interface CartItem {
  itemName: string;
  itemPrice: number;
}

export const cartAtom = atom<CartItem[]>([]);

export const totalPriceAtom = atom(get => get(cartAtom).reduce((total, item) => total + item.itemPrice, 0));
