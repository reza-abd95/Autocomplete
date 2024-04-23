import React from "react";
import { shortenText } from "./helper/helper";

function Box({ products, text, setText }) {
  console.log(text);
  const newProducts = products.filter((p) =>
    p.title.toLowerCase().includes(text.toLowerCase().trim())
  );

  return (
    <div>
      <ul>
        {newProducts.map((p) => (
          <li key={p.id} onClick={() => setText(shortenText(p.title))}>
            {shortenText(p.title)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Box;
