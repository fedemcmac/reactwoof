import React from "react";

const DogCard = props => {
  if (props.dog.hasOwnProperty('image')) {
    return (
      <div id="dog-info">
        <img src={props.dog.image} alt={`dog.name`} />
        <h2>{props.dog.name}</h2>
        <button id={props.dog.id} onClick={props.handleDogButton} >{props.dog.isGoodDog === true ? "Bad Dog" : "Good Dog"}</button>
      </div>
    );
  } else {return null}
};

export default DogCard;
