import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "../Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse (response) {
    setPhotos(response.data.photos);
  }

  function search(){

  // document ref: https://api.dictionaryapi.dev
  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiURL).then(handleDictionaryResponse);

  let pexelsAPIKey = "PvReVrgsPhHGI7GifuxNvmTgvkp8UkJRbzjjIcXpAUM9hE7fBom5TdNP";
  let pexelsURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
  let headers = {Authorization: `${pexelsAPIKey}`}
  axios.get(pexelsURL, {headers: headers,}).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            className="searchBar"
          />
          <button className="searchIcon"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      
      <section>
        <Results results={results} />
        <Photos photos={photos}/>
      </section>
    </div>
  );
}