import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import styles from "./SavedRecipe.module.css";
class SavedRecipe extends Component {
  state = { recipes: [] };

  getSavedRecipes = () => {
    var savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    return savedRecipes;
  };

  componentDidMount() {
    this.setState({ recipes: this.getSavedRecipes() });
  }

  render() {
    const savedRecipes = this.state.recipes.map((recipe) => (
      <RecipeCard
        id={recipe.id}
        name={recipe.name}
        imageUrl={recipe.img}
      ></RecipeCard>
    ));

    return (
      <div>
        <h3>Saved Recipes</h3>
        <div className={styles.separator} />
        <div className={styles.fullWidth}>{savedRecipes}</div>
      </div>
    );
  }
}

export default SavedRecipe;
