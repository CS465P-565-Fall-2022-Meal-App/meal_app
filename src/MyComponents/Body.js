/** @format */

import React from 'react';

import MealApp from '../MealApp/MealApp';

export default function Body() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="1.jpg"
              className="d-block w-100"
              alt="Pancake breakfast"
            />
            <div className="carousel-caption d-none d-md-block bg-dark textopaque">
              <h2>Welcome to My Chef</h2>
              <p>A heaven for Foodies</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="2.jpg" className="d-block w-100" alt="Eggs breakfast" />
            <div className="carousel-caption d-none d-md-block bg-dark textopaque">
              <h2>Welcome to My Chef</h2>
              <p>Give us ingrident we give you Ideas</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="3.jpg" className="d-block w-100" alt="Desert sweetdish" />
            <div className="carousel-caption d-none d-md-block bg-dark textopaque">
              <h2>Welcome to My Chef</h2>
              <p>No one is born a great cook, one learns by doing</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="meal-wrapper">
        <div className="meal-search">
          <h2 className="title">My Chef App</h2>
          <blockquote>
            Real food doesn't have ingredients, real food is ingredients.
            <br />
            <cite>-Jamie Oliver</cite>
          </blockquote>

          <MealApp />
        </div>
      </div>
    </div>
  );
}
