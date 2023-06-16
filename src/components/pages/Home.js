import Footer from "../Footer";
import Header from "../Header";
import ProductList from "../products/ProductList";

const Home = () => {
  return (
    <>
      <Header bannerVisibility={true}/>
      <ProductList topTextProductList="Current Products"/>
      <Footer />
    </>
  );
};

export default Home;
