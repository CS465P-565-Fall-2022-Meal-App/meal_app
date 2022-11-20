/** @format */

const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5001;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

const categoriesURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const areasURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const ingredientsURL =
  'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

let categoriesData = [];

const getCategories = (url) => {
  axios
    .get(url)
    .then((response) => {
      response.data.categories.forEach((item) => {
        categoriesData.push(item);
      });
      //console.log('done');
    })
    .catch((error) => {
      // Error logging and display
      console.log(error);
    });
  //console.log('are we done?');
};

getCategories(categoriesURL);

let areasData = [];

const getAreas = (url) => {
  axios
    .get(url)
    .then((response) => {
      response.data.meals.forEach((item) => {
        areasData.push(item);
      });
      //console.log('done');
    })
    .catch((error) => {
      // Error logging and display
      console.log(error);
    });
  //console.log('are we done?');
};

getAreas(areasURL);

let ingredientsData = [];

const getIngredients = (url) => {
  axios
    .get(url)
    .then((response) => {
      response.data.meals.forEach((item) => {
        ingredientsData.push(item);
      });
      //console.log('done');
    })
    .catch((error) => {
      // Error logging and display
      console.log(error);
    });
  //console.log('are we done?');
};

getIngredients(ingredientsURL);

app.get('/', (req, res) => {
  // render pug template for the index.html file

  res.render('index', {
    heading: 'MealDB Experimental',
    main: 'This application is to experiment with pulling information from MealDB.  If it looks familiar, it is because some code from Homework 4 was borrowed to set it up quickly.',
  });
});

app.get('/categories', (req, res) => {
  let categories = [];

  categoriesData.forEach((item) => {
    let category = item.strCategory;
    let image = item.strCategoryThumb;
    if (category === undefined) category = `no data`;
    let description = item.strCategoryDescription;
    if (description === undefined) description = `no data`;
    categories.push(`${category} - ${image} \n ${description}`);
  });

  categories.sort(new Intl.Collator('en-US').compare);

  res.render('page', {
    heading: 'Categories in MealDB',
    results: categories,
  });
});

app.get('/areas', (req, res) => {
  let areas = [];

  areasData.forEach((item) => {
    let area = item.strArea;
    areas.push(`${area}`);
  });

  areas.sort(new Intl.Collator('en-US').compare);

  res.render('page', {
    heading: 'Areas in MealDB',
    results: areas,
  });
});

app.get('/ingredients', (req, res) => {
  let ingredients = [];

  ingredientsData.forEach((item) => {
    let name = item.strIngredient;
    let description = item.strDescription || 'no data';
    let type = item.strType || 'no data';
    ingredients.push(
      `Name: ${name} - Description: ${description} - Type: ${type}`,
    );
  });

  ingredients.sort(new Intl.Collator('en-US').compare);

  res.render('page', {
    heading: 'Ingredients in MealDB',
    results: ingredients,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
