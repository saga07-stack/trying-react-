import React from 'react'

const RecipeDetails = (props) => {
  return (
    <div>
      <h1> The recipe for {props.recipe} takes {props.cookingTime} minutes and uses of {props.ingredients} </h1>
    </div>
  );
};

export default RecipeDetails;
