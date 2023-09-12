import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState(""); 

function handleResponse(response) {
console.log(response.data);
}

function search(event){
  event.preventDefault();

  // doumentation: https://www.shecodes.io/learn/apis/dictionary

  let apiKey = "a5e754foe586e4b3b40a3fbt57cbe11f"
  let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(handleResponse);
} 

function handleKeywordChange(event) {
setKeyword(event.target.value);
}

return (
  <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" onChange={handleKeywordChange}/>
    </form>
  </div>
);
}

export default Dictionary;