import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CartCard from "./CartCard";

import styles from "./Cart.module.css";
import { useCallback } from "react";

const Cart = ({ itemsAr, exitModalButton }) => {
  const { setCartItem } = useContext(CartContext)
  const [items, setItems] = useState([]);

  const itemsArHandler = useCallback(() => {
    const uniqueArray = itemsAr.filter((obj, index, self) => {
      return index === self.findIndex((o) => o.id === obj.id);
    });
    setItems(uniqueArray);
  }, [itemsAr]);

  useEffect(() => {
    itemsArHandler();
  }, [itemsAr, itemsArHandler]);

  const deleteItemHandler = id =>{
    const uniqueArrayTwo = items.filter(item => item.id !== id)
    setItems(uniqueArrayTwo)
    setCartItem(uniqueArrayTwo)
  }

  return (
    <>
      <div className={styles["main-background"]}></div>
      <div className={styles["main-content"]}>
        <div>
          <div className={styles["cart-elem-one"]}>
            <h2>Your cart</h2>
            <button onClick={exitModalButton}>X</button>
          </div>
          <div className={styles["cart-elem-two"]}>
            <p>Product</p>
          </div>
          <div className={styles["cart-elem-items"]}>
          {items.map((e) => {return (<CartCard cartItemId={e.id} cartItemTitle={e.name} cartItemPrice={e.price} cartItemSize={e.size} cartItemImage={e.image} cartItemDelete={() => deleteItemHandler(e.id)} cartItemCount={e.count}/>)})}
          </div>
        </div>
        <div className={styles["cart-elem-three"]}>
          <div>
            <p>Tax included and shipping calculated at checkout</p>
          </div>
          <button>CHECK OUT</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
