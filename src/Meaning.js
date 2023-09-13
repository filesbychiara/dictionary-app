import React from "react";
import Synonyms from "./Synonyms";

function Meaning(props) {
  return (
    <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition, index){
return (
  <div key={index}>
    <p>
    {definition.definition}
    <em>
      {definition.example}
      </em>
      <Synonyms synonyms={definition.synonyms} />
      
    </p>
  </div>
);
    })}
    </div>
);
}

export default Meaning;