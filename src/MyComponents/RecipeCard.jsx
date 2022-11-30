import React, { Component } from "react";

import styles from "./RecipeCard.module.css";
import RecipeModal from "./RecipeModal";

class RecipeCard extends Component {
  state = {
    mealName: this.props.name,
    mealImg: this.props.imageUrl,
    mealId: this.props.id,
    modalShow: false,
  };

  openYoutube = () => {
    window.open(this.state.mealYoutubeURL, "_blank", "noopener,noreferrer");
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.card}>
        <img src={this.state.mealImg} alt="" style={{ width: "100%" }} />
        <div className={styles.container}>
          <h4>
            <b>{this.state.mealName}</b>
          </h4>

          <button
            className={styles.button}
            onClick={() => this.setState({ modalShow: true })}
          >
            View Recipe
          </button>
          <RecipeModal
            id={this.state.mealId}
            showSaveButton={false}
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
          />
        </div>
      </div>
    );
  }
}

export default RecipeCard;
