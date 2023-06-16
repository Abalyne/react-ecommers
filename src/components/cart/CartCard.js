import styles from "./CartCard.module.css";

const CartCard = ({
  cartItemImage,
  cartItemTitle,
  cartItemPrice,
  cartItemSize,
  cartItemDelete,
  cartItemToTPrice,
  cartItemCount,
  cartItemId

}) => {
  return (
    <>
      <div id={cartItemId} className={styles["cartcard-main"]}>
        <div className={styles["cartcard-elem-one"]}>
          <img src={cartItemImage} />
          <div className={styles["cartcard-elem-one-text"]}>
            <div>
              <h2>{cartItemTitle}</h2>
              <h3>{cartItemPrice}</h3>
              <h3>{cartItemSize}</h3>
              <div className={styles["cartcard-elem-one-input"]}>
                <input type="number" value={cartItemCount} min={1} max={100} />
                <button id={cartItemId} onClick={cartItemDelete}>X</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>{cartItemToTPrice}</h3>
        </div>
      </div>
    </>
  );
};

export default CartCard;
