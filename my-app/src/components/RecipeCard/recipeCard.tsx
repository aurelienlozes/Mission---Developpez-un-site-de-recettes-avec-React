import React from "react";
import styles from "@/app/styles.module.css";
import Link from 'next/link'

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
    <Link href={`/recipe/${recipe.slug}`}>
    <article className={styles.recipeCard}>
      <div className={styles.recipeImg}>
        <img src={imgSrc} alt={recipe.name} loading="lazy" />
        <span className={styles.recipeTime}>{formatTime(recipe.time)}</span>
      </div>

      <div className={styles.recipeBody}>
        <h2 className={styles.recipeTitle}>{recipe.name}</h2>

        <p className={styles.labels}>Recette</p>
        <p className={styles.recipeDesc}>{recipe.description}</p>

        <p className={styles.labels}>Ingrédients</p>
        <ul className={styles.ingredientsGrid}>
          {recipe.ingredients.map((ing, i) => (
            <li key={`${ing.ingredient}-${i}`}>
              <span className={styles.ingredientName}>{ing.ingredient}</span>
              <span className={styles.ingredientQty}>{formatQuantity(ing)}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
    </Link>
  );
}

export default RecipeCard;