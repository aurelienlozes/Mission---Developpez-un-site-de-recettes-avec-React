"use client" //si vous utilisez Next.js
import { use } from 'react'
import React from 'react';
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import data from '../../../data/recipes.json'

const RecipePage = ({ params }) => {
    const { slug } = use(params)

    const recipe = data.find((r) => r.slug === slug)

    if (!recipe) {
        notFound()
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src={`/images/${recipe.image}`} alt={recipe.name} width={500} height={300} />
            <p>{recipe.description}</p>
        </div>
    ) 
}
export default RecipePage