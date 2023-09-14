import React from "react";

function Phonetics(props) {
  return (
  <div className="Phonetic">
    <div className="text">{props.phonetic.text}</div>
    <div><a href={props.phonetic.audio} target="_blank"><i class="fa-solid fa-circle-play"></i></a></div>
    </div>
  );
}

export default Phonetics;