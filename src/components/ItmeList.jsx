import React, { useEffect, useState } from "react";
import { shortenText } from "../helper/helper";
import styles from "./ItemList.module.css";
import check from "../assets/check.png";

function ItmeList({ p, text, setText, showHandler }) {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setText(shortenText(p.title));
    showHandler(false);
  };

  useEffect(() => {
    if (shortenText(p.title) === text) {
      setActive(true);
    }
  }, []);

  return (
    <>
      <li className={styles.li} key={p.id} onClick={clickHandler}>
        {active && <img src={check} alt="updown" className={styles.icon} />}
        {shortenText(p.title)}
      </li>
    </>
  );
}

export default ItmeList;
