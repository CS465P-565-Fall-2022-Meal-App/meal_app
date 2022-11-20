import Modal from "../../node_modules/react-bootstrap/Modal";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUser,
  faBookmark,
} from "@fortawesome/fontawesome-free-regular";
import styles from "./RecipeModal.module.css";
function RecipeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={styles.partialScreen}>
        <img
          className={styles.recipeCardImage}
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
          alt=""
        />
        <div style={{ textAlign: "left" }}>
          <h3>Paneer Butter Masala</h3>
          <div className={styles.separator}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.column}>
            <h4 className={styles.columntitle}>
              <FontAwesomeIcon style={{ color: "gray" }} icon={faClock} />
              &nbsp; 20
            </h4>
            <h6>Minutes</h6>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columntitle}>
              <FontAwesomeIcon style={{ color: "gray" }} icon={faBookmark} />
              &nbsp; 5
            </h4>
            <h6>Ingredients</h6>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columntitle}>
              <FontAwesomeIcon style={{ color: "gray" }} icon={faUser} />
              &nbsp; 4-5
            </h4>
            <h6>Servings</h6>
          </div>
        </div>
        <div>
          <h3>Ingredients</h3>
          <div className={styles.separator}></div>

          <p>1. Paneer</p>
          <p>2. Cashews</p>
          <p>3. Tomatoes</p>
          <p>4. Salt</p>
          <p>5. Sugar</p>
          <p>6. Turmeric Powder</p>
          <p>7. Garam Masala</p>

          <h3>Recipe</h3>
          <div className={styles.separator}></div>

          <p>
            1. Soak 18 to 20 cashews in ⅓ cup hot water for 20 to 30 minutes.
          </p>
          <p>
            2. While the cashews are soaking, you can prep the other
            ingredients. It’s time for chopping tomatoes, chopping and preparing
            the ginger-garlic paste, and slicing paneer into cubes.
          </p>
          <p>
            3. To make the ginger garlic paste, crush a 1 inch piece of peeled
            ginger with 3 to 4 small to medium-sized garlic cloves in a mortar &
            pestle. Continue crushing until it is a semi-fine or fine paste.
            Keep aside.
          </p>
          <p>
            4. After 20 to 30 minutes, drain the water and add the soaked
            cashews to a blender or mixer-grinder.
          </p>
          <p>
            5. Blend to a smooth paste without any tiny bits or chunks of
            cashews. Remove the cashew paste from the blender and set it aside.
          </p>
          <p>
            6. In the same blender, add 2 cups of diced or roughly chopped
            tomatoes.
          </p>
          <p>7. Blend to a smooth tomato puree. Set aside.</p>
          <p>
            8. Heat a thick bottomed pan or a heavy pan. Keep the heat to a low
            or medium-low. Add 2 tablespoons (or 3 to 4 tablespoons for a richer
            version) butter in a pan. Either salted or unsalted butter can be
            used.
          </p>
        </div>
        <div className={styles.centered}>
          <button className={styles.button}>View Recipe on Youtube</button>
          <button className={styles.button}>Save Recipe</button>
        </div>
      </div>
    </Modal>
  );
}

export default RecipeModal;
