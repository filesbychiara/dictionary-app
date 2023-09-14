import React from "react";

function Synonyms(props){
  if (props.synonyms){
  return (
    <ul className="Synonyms">
      <p>Synonyms</p>
    {props.synonyms.map(function(synonym, index){
      return <li key={index}>
         {synonym}
        </li>;
    })}
    </ul>
    );
} else {
  return null;
}
}

export default Synonyms;