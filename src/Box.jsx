import React from "react";
import { shortenText } from "./helper/helper";
import styles from "./Box.module.css";
import ItmeList from "./ItmeList";

function Box({ products, text, setText, showHandler }) {
  const newProducts = products.filter((p) =>
    shortenText(p.title).toLowerCase().includes(text.toLowerCase().trim())
  );

  return (
    <div className={styles.box}>
      {Object.keys(newProducts).length === 0 ? (
        <div> Nothing Found </div>
      ) : (
        <ul>
          {newProducts.map((p) => (
            <ItmeList p={p} showHandler={showHandler} setText={setText} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Box;
