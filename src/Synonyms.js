import React from "react";

function Synonyms(props){
  if (props.synonyms){
  return (
    <div className="Synonyms">
    {props.synonyms.map(function(synonym, index){
      return <div key={index}>{synonym}</div>;
    })}
    </div>
    );
} else {
  return null;
}
}

export default Synonyms;