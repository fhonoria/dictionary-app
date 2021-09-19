import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(null);

  function search() {
    //documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setResult(response.data[0]);
    console.log(response);
  }

  function saveKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <section>
            <h1>What word do you want to look up?</h1>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              onChange={saveKeyword}
            ></input>
            <div className="hints">
              suggested words: sunset, wine, yoga, plant...
            </div>
          </section>
          <Results result={result} />
        </form>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
