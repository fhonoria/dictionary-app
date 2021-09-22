import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search() {
    //documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001891db9cbae544d21b4ed67ac432f268c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function saveKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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
          <Photos photos={photos} />
        </form>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
