import React from "react";
import Synonyms from "./Synonyms";

function Meaning(props) {
  return (
    <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function (definition, index){
      return (
        <div key={index}>
    <div className="defintions">
      {/* <p>Meaning</p> */}
    <ul><li>{definition.definition}</li></ul>
    <div className="example">
      <p>{definition.example}</p>
      </div>
     {/* <p>Synonyms {props.meaning.synonyms}</p> */}
      <Synonyms synonyms={definition.synonyms} />
    </div>
  </div>
);
    })}
    </div>
);
}

export default Meaning;
