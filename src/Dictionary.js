import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState(""); 
  let [results, setResults] = useState(null);

function handleResponse(response) {
setResults(response.data[0]);
//console.log (response.data[0].meanings[0].definitions[0].definition);
}

function search(event){
  event.preventDefault();

  // doumentation: https://api.dictionaryapi.dev/api/v2/entries/en/<word>
  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiURL).then(handleResponse);
} 

function handleKeywordChange(event) {
setKeyword(event.target.value);
}

return (
  <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange} />
    </form>
    <Results results={results} />
  </div>
);
}

export default Dictionary;