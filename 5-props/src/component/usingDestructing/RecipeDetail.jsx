import React from 'react'

const RecipeDetail = ({recipeName, cookingTime , ingredients}) => {
  return (
    <div>
      <h1> {recipeName} </h1>
      <h4> {cookingTime} </h4>
      <h4> {ingredients} </h4>
    </div>
  );
};

export default RecipeDetail;
