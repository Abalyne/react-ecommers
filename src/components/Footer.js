import { useState } from "react";
import styles from "./Footer.module.css"

const Footer = () =>{
    const [subd, setSubd] = useState(false);

    const subHandler = () =>{
        setSubd(true);
    }

    return <footer className={styles.footer}>
        <div className={styles.subscribe}>
            <h1>Subscribe to our emails </h1>
            {!subd && <input type="text"/>}
            {!subd && <button onClick={subHandler}>Subscribe</button>}
            {subd && <h2>Thanks for subscribing</h2>}
        </div>
    </footer>
}

export default Footer;