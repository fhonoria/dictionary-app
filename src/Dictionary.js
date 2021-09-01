import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState(null);

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function saveKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  return (
    <div className="Dictionay">
      <form onSubmit={search}>
        <input type="search" onChange={saveKeyword}></input>
        <Results result={result} />
      </form>
    </div>
  );
}
