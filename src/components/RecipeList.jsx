import React from "react";
import Recipe from "./Recipe";
import "./RecipeList.css";

const RecipeList = props => {
  return (
    <div className="RecipeList">
      <ul>
        {props.recipes.map((item, index) => {
          const height = props.currentExpanded === index ? "auto" : "45px";
          const display = props.currentExpanded === index ? "inherit" : "none";

          return (
            <Recipe
              key={index}
              index={index}
              name={item.name}
              height={{ height: height }}
              ingredients={item.ingredients}
              thisExpanded={() => {
                props.thisExpanded(index);
              }}
              display={{ display: display }}
              removeRecipe={() => {
                props.removeRecipe(index);
              }}
              editRecipe={() => {
                props.editRecipe(index);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
