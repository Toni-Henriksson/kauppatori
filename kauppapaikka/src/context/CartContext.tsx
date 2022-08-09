import {createContext, ReactNode, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

type CartProviderProps = {
  children: ReactNode;
};
type item = {
  id: string;
  title: string;
  price: string;
  details: string;
  date: string;
  category: string;
  owner: string;
  imageurls: Array<string>;
};

type CartContext = {
  toggleState: boolean;
  toggleCart: () => void;
  addItemToCart: (item: item) => void;
  removeFromCart: (id: string) => void;
  cartItems: item[];
};

const CartContext = createContext({} as CartContext);

export function CartProvider({children}: CartProviderProps) {
  const [toggleState, setToggleState] = useState(false);

  const [cartItems, setCartItems] = useLocalStorage<item[]>("shopping-cart", []);

  const toggleCart = () => {
    setToggleState(!toggleState);
  };

  function addItemToCart(item: item) {
    const newObject = {...item};
    const tempArr = cartItems;
    tempArr.push(newObject);
    setCartItems(tempArr);
  }

  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{toggleState, toggleCart, addItemToCart, removeFromCart, cartItems}}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
