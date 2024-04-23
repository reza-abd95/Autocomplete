import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "./Box";

function Autocomplete() {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const data = res.data;
      setProducts(data);
    });
  }, [text]);

  const searchHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input placeholder="Search" value={text} onChange={searchHandler} />
      <Box products={products} text={text} setText={setText} />
    </div>
  );
}

export default Autocomplete;
