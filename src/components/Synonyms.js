import React from "react";

function Synonyms(props){
  if (props.synonyms){
  return (
    <div className="Synonyms">
      {/* <p>Synonyms</p> */}
    <ul>
    {props.synonyms.map(function(synonyms, index){
      return <li key={index}>{synonyms}</li>;
    })}
    </ul>
    </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;