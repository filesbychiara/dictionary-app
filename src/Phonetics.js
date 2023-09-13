import React from "react";

function Phonetics(props) {
  console.log(props.phonetic);
  return (
  <div className="Phonetic">
    <a href={props.phonetic.audio} target="_blank">Listen</a>
    {props.phonetic.text}
    </div>
  );
}

export default Phonetics;