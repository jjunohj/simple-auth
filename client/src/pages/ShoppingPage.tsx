import { cartAtom, CartItem, totalPriceAtom } from 'data/atoms/shoppingAtoms';
import { useAtom } from 'jotai';

export function ShoppingPage() {
  const [cart, setCart] = useAtom(cartAtom);
  const [total] = useAtom(totalPriceAtom);

  const addItem = (item: CartItem) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeItem = (idx: number) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== idx));
  };

  return (
    <>
      <h1>Shopping</h1>
      <ul>
        {cart.map((item, idx) => (
          <li key={item.itemName}>
            {item.itemName} - {item.itemPrice}
            <button onClick={() => removeItem(idx)}> X </button>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <button onClick={() => addItem({ itemName: 'Apple', itemPrice: 100 })}>Add Apple</button>
      <button onClick={() => addItem({ itemName: 'Banana', itemPrice: 200 })}>Add Banana</button>
    </>
  );
}
