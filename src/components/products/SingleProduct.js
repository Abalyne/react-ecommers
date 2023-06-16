import styles from "./SingleProduct.module.css";

const SingleProduct = ({ image, price, title, id, switchTOProductPage }) => {
  return (
    <div id={id} className={styles.card}>
      <div className={styles["card-img"]}>
        <img src={image} alt="Item_Image" />
      </div>
      <div className={styles["card-footer"]}>
        <label className={styles["card-label"]}>{title}</label>
        <label className={styles["card-label"]}>{price}</label>
        <button className={styles["card-button"]} onClick={switchTOProductPage}>view</button>
      </div>
    </div>
  );
};

export default SingleProduct;
