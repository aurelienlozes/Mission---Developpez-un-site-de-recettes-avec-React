import React from 'react';
import RecipeCard from '@/components/RecipeCard/recipeCard';
import recipesData from "@/data/recipes.json";



export default function Home() {
  return (
    <div>
      <RecipeCard recipe={recipesData[0]}  />
    </div>
  );
}
