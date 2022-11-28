/** @format */

import Modal from '../../node_modules/react-bootstrap/Modal';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import {
  faClock,
  faUser,
  faBookmark,
} from '@fortawesome/fontawesome-free-regular';
import styles from './RecipeModal.module.css';

class RecipeModal extends Component {
  state = {
    mealName: '',
    mealImg: '',
    mealInstructions: [],
    mealIngredients: [],
    mealYoutubeURL: '',
  };
  componentDidMount() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.id}`,
      )
      .then((res) => {
        const meal = res.data.meals[0];
        let ingredients = [];
        for (var i = 1; i < 21; i++) {
          let ingredient = '';
          if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`] !== '') {
            ingredient += meal[`strIngredient${i}`];
          } else {
            break;
          }
          if (meal[`strMeasure${i}`] && meal[`strMeasure${i}`] !== '') {
            ingredient += ` - ${meal[`strMeasure${i}`]}`;
          }
          ingredients.push(ingredient);
        }
        this.setState({
          mealName: meal.strMeal,
          mealImg: meal.strMealThumb,
          mealInstructions: meal.strInstructions.split(/\r?\n/),
          mealIngredients: ingredients,
          mealYoutubeURL: meal.strYoutube,
        });
      });
  }
  openYoutube = () => {
    window.open(this.state.mealYoutubeURL, '_blank', 'noopener,noreferrer');
  };
  constructor(props) {
    super(props);
  }
  render() {
    const ingredients = this.state.mealIngredients.map((ingredient) => {
      return <li key={ingredient}>{ingredient}</li>;
    });

    const instructions = this.state.mealInstructions.map((instruction) => {
      if (instruction.length > 0)
        return <li key={instruction}>{instruction}</li>;
    });

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className={styles.partialScreen}>
          <img
            className={styles.recipeCardImage}
            src={this.state.mealImg}
            alt=""
          />
          <div style={{ textAlign: 'left' }}>
            <h3>{this.state.mealName}</h3>
            <div className={styles.separator}></div>
          </div>
          <div className={styles.container}>
            <div className={styles.column}>
              <h4 className={styles.columntitle}>
                <FontAwesomeIcon style={{ color: 'gray' }} icon={faClock} />
                &nbsp; 20
              </h4>
              <h6>Minutes</h6>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columntitle}>
                <FontAwesomeIcon style={{ color: 'gray' }} icon={faBookmark} />
                &nbsp; {this.state.mealIngredients.length}
              </h4>
              <h6>Ingredients</h6>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columntitle}>
                <FontAwesomeIcon style={{ color: 'gray' }} icon={faUser} />
                &nbsp; 4-5
              </h4>
              <h6>Servings</h6>
            </div>
          </div>
          <div>
            <h3>Ingredients</h3>
            <div className={styles.separator}></div>
            <ol>{ingredients}</ol>
            <h3>Recipe</h3>
            <div className={styles.separator}></div>
            <ol>{instructions}</ol>
          </div>
          <div className={styles.centered}>
            <button
              className={styles.button}
              onClick={() => this.openYoutube()}
            >
              View Recipe on Youtube
            </button>
            <button className={styles.button}>Save Recipe</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default RecipeModal;
