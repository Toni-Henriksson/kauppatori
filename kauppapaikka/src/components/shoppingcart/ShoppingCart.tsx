import {useState} from "react";

interface ShoppingCartProps {
  toggle: boolean;
}

const ShoppingCart: React.FunctionComponent<ShoppingCartProps> = ({toggle}) => {
  return (
    <div>
      {toggle ? (
        <div style={{width: "300px", position: "fixed", right: 0, backgroundColor: "cyan"}}>
          <h1>Moi</h1>
        </div>
      ) : null}
    </div>
  );
};

export default ShoppingCart;
