import { useEffect, useState, useContext} from "react";
import { CartContext } from "./contexts/CartContext"
import HeaderIMG from "../assets/Banner_Image.png";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs"
import Cart from "./cart/Cart";


const Header = ({ bannerVisibility }) => {
  const { cartItem } = useContext(CartContext);
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    setShowBanner(bannerVisibility);
  }, [bannerVisibility]);

  const homePageSwitchHandler = () => {
    nav("/");
  };

  const cartShowModalHandler = () => {
    setShowModal(true);
  };

  const carthideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <Cart exitModalButton={carthideModalHandler} itemsAr={cartItem}/>}
      {showBanner && (
        <header className={styles["header-show"]}>
          <h2 onClick={homePageSwitchHandler}>ApeInCables</h2>
          <button onClick={cartShowModalHandler}>{<BsFillCartFill />}</button>
        </header>
      )}
      {!showBanner && (
        <header className={styles["header-hidden"]}>
          <h2 onClick={homePageSwitchHandler}>ApeInCables</h2>
          <button onClick={cartShowModalHandler} />
        </header>
      )}
      {showBanner && (
        <div className={styles["main-image"]}>
          <img src={HeaderIMG} alt="Header banner img" />
        </div>
      )}
    </>
  );
};

export default Header;
