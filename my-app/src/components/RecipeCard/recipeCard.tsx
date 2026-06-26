import React from "react";


export interface RecipeIngredient {
  ingredient: string;
  quantity?: number | string;
  unit?: string;
}


export interface Recipe {
  id: number;
  image: string;
  name: string;
  slug: string;
  servings: number;
  ingredients: RecipeIngredient[];
  time: number;
  description: string;
  appliance: string;
  ustensils: string[];
}

/** Formate la quantité + unité d'un ingrédient en une chaîne lisible */
function formatQuantity(ing: RecipeIngredient): string {
  if (ing.quantity === undefined) return "";
  return ing.unit ? `${ing.quantity} ${ing.unit}` : String(ing.quantity);
}

/** Formate un temps en minutes en "Xmin" ou "Xh" */
function formatTime(minutes: number): string {
  if (minutes === 0) return "Rapide";
  if (minutes < 60) return `${minutes}min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h${m}` : `${h}h`;
}


function RecipeCard({ recipe }: { recipe: Recipe }) {
  // Les images sont dans le dossier public/images/ — à adapter selon votre structure
  const imgSrc = `/images/${recipe.image}`;

  return (
    <article className="recipe-card">
      <div className="recipe-img">
        <img src={imgSrc} alt={recipe.name} loading="lazy" />
        <span className="recipe-time">{formatTime(recipe.time)}</span>
      </div>

      <div className="recipe-body">
        <h2 className="recipe-title">{recipe.name}</h2>

        <p className="recipe-label">Recette</p>
        <p className="recipe-desc">{recipe.description}</p>

        <p className="recipe-label">Ingrédients</p>
        <ul className="ingredients-grid">
          {recipe.ingredients.map((ing, i) => (
            <li key={`${ing.ingredient}-${i}`}>
              <span className="ingredient-name">{ing.ingredient}</span>
              <span className="ingredient-qty">{formatQuantity(ing)}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default RecipeCard;