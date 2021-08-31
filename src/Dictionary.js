import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searched for ${keyword}`);
  }

  function saveKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionay">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={saveKeyword}></input>
      </form>
    </div>
  );
}
