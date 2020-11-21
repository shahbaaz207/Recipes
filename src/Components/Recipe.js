import React from "react";

export default function Recipe({ title, calories, image, ingredients }) {
  return (

    <div className="recipe">
      <img src={image} alt={title} className="recipe__image"/>
      <h3>{title}</h3>
      <p>
          {ingredients.map((ingredient) => (
             <li>{ingredient.text}</li>
           ))}
      </p>
      <p><b>Calories </b>{calories}</p>
    </div>

  
  );
}
