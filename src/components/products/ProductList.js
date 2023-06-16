import SingleProduct from "./SingleProduct";
import styles from "./ProductList.module.css";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ topTextProductList }) => {
  const [items, setItems] = useState([]);
  const navi = useNavigate()

  const fetchClothingitems = useCallback(async () => {
    const data = await fetch("https://fakestoreapi.com/products/").then(x => x.json());
    // makes life easier
    // in reality you would use react-query its a beautiful library for data fetching 10/10
    // const res = await axios.get("https://fakestoreapi.com/products/")
    // const data = res.data;
    // I would suggest using axios, its more commonly used and its easier

    const editedData = data
      .map((dt) => {
        if (
          dt.category === "men's clothing" ||
          dt.category === "women's clothing"
        ) {
          return dt;
        } else {
          return null;
        }
      })
      .filter((x) => x);
    setItems(editedData);
  }, []);

  useEffect(() => {
    fetchClothingitems();
  }, [fetchClothingitems]);

  return (
    <>
      <h2 className={styles.text}>{topTextProductList}</h2>
      <div>
        <section className={styles.content}>
          {items.map((e) => {
            return (
              <SingleProduct
                switchTOProductPage={() => navi(`/product/${e.id}`)}
                key={e.id}
                id={e.id}
                title={e.title}
                price={e.price}
                image={e.image}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default ProductList;
