import React from "react";

const Recipe = props => {
  return (
    <li index={props.index} style={props.height}>
      <div
        className="Recipe-title"
        onClick={() => {
          props.thisExpanded();
        }}
      >
        {props.name}
      </div>

      <div className="Recipe-content" style={props.display}>
        <div className="Recipe-content-title">
          <span>Ingredients</span>
          <button onClick={props.editRecipe}>EDIT</button>
          <button onClick={props.removeRecipe}>REMOVE</button>
        </div>

        <ul>
          {props.ingredients.map((item, index) => {
            return <li key={index}> - {item} </li>;
          })}
        </ul>
      </div>
    </li>
  );
};

export default Recipe;
