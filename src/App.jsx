import React, { Component } from "react";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],

      currentExpanded: null
    };
  }

  componentDidMount() {
    this.getRecipeList();
  }

  thisExpanded = index => {
    this.state.currentExpanded === index
      ? this.setState({ currentExpanded: null })
      : this.setState({ currentExpanded: index });
  };

  removeRecipe = index => {
    let clone = this.state.recipes;
    clone.splice(index, 1);
    this.setState({ recipes: clone });

    this.setRecipeList(this.state.recipes);
  };

  editRecipe = index => {
    let clone = this.state.recipes;
    //document.getElementById("NewRecipe-add").click();
    let newRecipe = prompt(
      "Modify the recipe (Each ingredient separated by a comma) ",
      clone[index].ingredients.join(", ")
    );
    clone[index].ingredients = newRecipe.match(/(?:[^,]+)|,,/g);
    this.setState({ recipes: clone });

    this.setRecipeList(this.state.recipes);
  };

  addRecipe = (name, ingredients) => {
    if (name === "" || ingredients === "") {
      alert("Either one of the inputs are empty");
      return false;
    }

    let ingredientsArray = ingredients.match(/(?:[^,]+)|,,/g);
    let clone = this.state.recipes;
    clone.push({ name: name, ingredients: ingredientsArray });
    this.setState({ recipes: clone });

    this.setRecipeList(this.state.recipes);
  };

  setRecipeList = recipesArray => {
    window.localStorage.setItem(
      "_viscosesole_recipes",
      JSON.stringify(recipesArray)
    );
  };

  getRecipeList = () => {
    let data = window.localStorage.getItem("_viscosesole_recipes");
    data = JSON.parse(data);

    let newRecipes = [];
    if (data !== null) {
      data.forEach(item => {
        newRecipes.push(item);
      });
    }

    this.setState({ recipes: newRecipes });
  };

  render() {
    return (
      <div className="RecipeBox">
        <RecipeList
          recipes={this.state.recipes}
          currentExpanded={this.state.currentExpanded}
          thisExpanded={this.thisExpanded}
          removeRecipe={this.removeRecipe}
          editRecipe={this.editRecipe}
        />
        <NewRecipe addRecipe={this.addRecipe} />
      </div>
    );
  }
}
