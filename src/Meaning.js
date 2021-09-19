import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <p>
              <strong>Example: </strong>
              <em>{definition.example}</em>
            </p>
            {definition.synonyms.map(function (synonyms, index) {
              return (
                <div key={index}>
                  <Synonyms synonyms={synonyms} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
