import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Box from "./Box";
import updown from "./assets/updown2.png";

import styles from "./Autocomplete.module.css";

function Autocomplete() {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const data = res.data;
      setProducts(data);
    });
  }, [text]);

  const searchHandler = (e) => {
    setText(e.target.value);
    if (!!e.target.value) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const showHandler = () => {
    setShow((show) => !show);
  };
  const closeHandler = () => {
    setShow(false);
  };

  return (
    <div className={styles.container} onClick={closeHandler}>
      <div className={styles.inputbox} onClick={(e) => e.stopPropagation()}>
        <input
          className={styles.input}
          placeholder="Search"
          value={text}
          onChange={searchHandler}
        />
        <button className={styles.button} onClick={showHandler}>
          <img src={updown} alt="updown" className={styles.icon} />
        </button>
      </div>
      {show && (
        <Box
          products={products}
          text={text}
          setText={setText}
          setShow={setShow}
          showHandler={showHandler}
        />
      )}
    </div>
  );
}

export default Autocomplete;
