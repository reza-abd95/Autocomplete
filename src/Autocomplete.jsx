import React, { useState } from "react";

function Autocomplete() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Autocomplete;
