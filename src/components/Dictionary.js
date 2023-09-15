import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "../Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
    setLoading(false); // Set loading to false when the response is received
  }

  function search(){
    setLoading(true); // Set loading to true when starting the search
  // document ref: https://api.dictionaryapi.dev
  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiURL).then(handleResponse);
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
        </form>
      
      <section>
        <Results results={results} />
      </section>
    </div>
  );
}
