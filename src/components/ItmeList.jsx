import React from "react";
import { shortenText } from "../helper/helper";
import styles from "./ItemList.module.css";

function ItmeList({ p, setText, showHandler }) {
  const clickHandler = () => {
    setText(shortenText(p.title));
    showHandler(false);
  };
  return (
    <>
      <li className={`${styles.li} `} key={p.id} onClick={clickHandler}>
        {shortenText(p.title)}
      </li>
    </>
  );
}

export default ItmeList;
