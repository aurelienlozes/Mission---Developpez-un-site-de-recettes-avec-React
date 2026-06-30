"use client" //si vous utilisez Next.js
import { use } from 'react'
import React from 'react';
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import data from '../../../data/recipes.json'
import styles from '@/app/page.module.css'
import { formatQuantity, formatTime } from '@/components/RecipeCard/recipeCard'

const RecipePage = ({ params }) => {
    const { slug } = use(params)

    const recipe = data.find((r) => r.slug === slug)

    if (!recipe) {
        notFound()
    }

    return (
        <article className={styles.recipePage}>
            <div className={styles.recipeImage}>
                <Image src={`/images/${recipe.image}`} alt={recipe.name} width={606} height={738} />
            </div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeTitle}>{recipe.name}</h1>
                <h2 className={styles.labels}>Temps de préparation</h2>
                <p className={styles.recipeTime}>{formatTime(recipe.time)}</p>

                <h2 className={styles.labels}>Ingrédients</h2>
                <ul className={styles.ingredientsGrid}>
                    {recipe.ingredients.map((ing, i) => (
                        <li key={i}>
                            <span className={styles.ingredientName}>{ing.ingredient}</span>
                            <span className={styles.ingredientQty}>{formatQuantity(ing)}</span>
                        </li>
                    ))}
                </ul>

                <h2 className={styles.labels}>Ustensiles nécessaires</h2>
                <ul className={styles.ingredientsGrid}>
                    {recipe.ustensils.map((ustensil, i) => (
                        <li key={i}>
                            <span className={styles.ingredientName}>{ustensil}</span>
                        </li>
                    ))}
                </ul>
                <h2 className={styles.labels}>Appareils nécessaires</h2>
                <ul className={styles.ingredientsGrid}>
                    <li>
                        <span className={styles.ingredientName}>{recipe.appliance}</span>
                    </li>
                </ul>

                <h2 className={styles.labels}>recette</h2>

                <p>{recipe.instructions}</p>
            </div>
        </article>
    )
}
export default RecipePage