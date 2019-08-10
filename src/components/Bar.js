import React from "react";

const Bar = props => {
  return (
    <div id="dog-bar">
      {props.dogs.map(dog => {
        return (
          <span
            name="dog"
            id={dog.id}
            key={dog.id}
            onClick={event => {props.handleClick(event)}}
          >
            {dog.name}
          </span>
        );
      })}
    </div>
  );
};

export default Bar;
