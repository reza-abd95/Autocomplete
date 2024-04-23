import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "./Box";

function Autocomplete() {
  const [text, setText] = useState("");
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const data = res.data;
      setTitles(data);
    });
  }, []);
  return (
    <div>
      <input
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Box titles={titles} />
    </div>
  );
}

export default Autocomplete;
