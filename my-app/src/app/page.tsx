import React from 'react';
import RecipeCard from '@/components/RecipeCard/recipeCard';
import recipesData from "@/data/recipes.json";
import styles from "@/app/styles.module.css";



export default function Home() {
  return (
    <main className={styles.cardsGrid}>{
      recipesData.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))
      }
    </main>
  );
}
