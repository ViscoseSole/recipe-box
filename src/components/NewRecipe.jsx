import React, { Component } from "react";
import "./NewRecipe.css";

export default class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeInput: "",
      ingredientInput: "",
      promptExtended: false
    };
  }

  onRecipeInputChange = e => {
    this.setState({ recipeInput: e.target.value });
  };
  ingredientInput = e => {
    this.setState({ ingredientInput: e.target.value });
  };

  togglePrompt = () => {
    this.state.promptExtended === false
      ? this.setState({ promptExtended: true })
      : this.setState({ promptExtended: false });
  };

  submitRecipe = () => {
    this.props.addRecipe(this.state.recipeInput, this.state.ingredientInput);
    this.setState({ ingredientInput: "", recipeInput: "" });
  };

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.submitRecipe();
    }
  };

  render() {
    const display = this.state.promptExtended === true ? "inherit" : "none";

    return (
      <div className="NewRecipe">
        <button id="NewRecipe-add" onClick={this.togglePrompt}>
          Add Recipe
        </button>

        <div className="NewRecipe-prompt" style={{ display: display }}>
          <input
            placeholder="Recipe Name"
            value={this.state.recipeInput}
            onChange={this.onRecipeInputChange}
            onKeyPress={this._handleKeyPress}
          />
          <input
            placeholder="Ingredients (Comma separated)"
            value={this.state.ingredientInput}
            onChange={this.ingredientInput}
            onKeyPress={this._handleKeyPress}
          />
          <button onClick={this.submitRecipe}>SUBMIT</button>
        </div>
      </div>
    );
  }
}
