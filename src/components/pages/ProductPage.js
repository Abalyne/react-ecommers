import { useParams } from "react-router-dom";
import Header from "../Header";
import { useEffect, useState, useContext, useCallback } from "react";
import { CartContext } from "../contexts/CartContext"
import Footer from "../Footer";
import styles from "./ProductPage.module.css";
import ProductList from "../products/ProductList";

const ProductPage = () => {
  const { setCartItem } = useContext(CartContext);
  const params = useParams();
  const [item, setItem] = useState([]);
  const [productSize, setProductSize] = useState("XS");
  const [productCount, setProductCount] = useState(1);

  const fetchSinglePage = useCallback( async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    const data = await response.json();
    setItem(data);
  }, [params.id])

  useEffect(() => {
    fetchSinglePage();
  }, [params, fetchSinglePage]);

  const countChangeHandler = (e) => {
    setProductCount(e.target.value.toString());
  };

  const addItemToCartHandler = () => {
    setCartItem((prevData) => {
      return [
        ...prevData,
        {
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.image,
          size: productSize,
          count: productCount,
        },
      ];
    });
  };

  return (
    <div>
      <Header bannerVisibility={false}/>
      <div className={styles["content-main"]}>
        <div className={styles["content-main-top"]}>
          <div className={styles["content-family-one"]}>
            <img src={item.image} alt="Product" />
            <div className={styles["content-family-one-boxs"]}>
              <h2>1</h2>
              <h2>2</h2>
              <h2>3</h2>
            </div>
          </div>
          <div className={styles["content-family-twoAndSize"]}>
            <div className={styles["content-family-two"]}>
              <p>ApeInCables</p>
              <h1>{item.title}</h1>
              <h3>£{item.price}</h3>
              <p>Tax Included.</p>
            </div>
            <div className={styles["content-family-sizes"]}>
              <p>Size</p>
              <div className={styles["content-family-sizes-buttons"]}>
                <button onClick={() => setProductSize("XS")}>XS</button>
                <button onClick={() => setProductSize("S")}>S</button>
                <button onClick={() => setProductSize("M")}>M</button>
                <button onClick={() => setProductSize("L")}>L</button>
                <button onClick={() => setProductSize("XL")}>XL</button>
                <button onClick={() => setProductSize("2XL")}>2XL</button>
                <button onClick={() => setProductSize("3XL")}>3XL</button>
              </div>
            </div>
            <div className={styles["content-family-quantity"]}>
              <p>Quantity</p>
              <input
                onChange={countChangeHandler}
                value={productCount}
                type="number"
                min={1}
                max={100}
              />
            </div>
            <div className={styles["content-family-cartButton"]}>
              <button onClick={addItemToCartHandler}>Add to cart</button>
            </div>
            <div className={styles["content-family-disc"]}>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
        <div className={styles["content-main-bottom"]}>
          <div>
            <ProductList topTextProductList="You may also like" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
