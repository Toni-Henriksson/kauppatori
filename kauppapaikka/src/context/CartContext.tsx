import {createContext, ReactNode, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

type CartProviderProps = {
  children: ReactNode;
};
type CartItem = {
  title: string;
  category: string;
  price: string;
  details: string;
  date: string;
  owner: string;
  imageurls: string;
};

type CartContext = {
  toggleState: boolean;
  toggleCart: () => void;
  cartItems: CartItem[];
};

const CartContext = createContext({} as CartContext);

export function CartProvider({children}: CartProviderProps) {
  const [toggleState, setToggleState] = useState(false);

  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);

  const toggleCart = () => {
    setToggleState(!toggleState);
  };

  function removeFromCart(id: number) {}

  return (
    <CartContext.Provider value={{toggleState, toggleCart, cartItems}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
