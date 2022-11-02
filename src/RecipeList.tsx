import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeListItem from "./RecipeListItem";
import initRecipes from "./recipies";
import { Recipe } from "./types/Recipe";

function RecipeList(): React.ReactElement {

    const [headline] = useState<string>('Rezeptliste');
    
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {

        async function fetchData() {
            
            const {data} = await axios.get<Recipe[]>(
                'http://localhost:3001/recipe'
            );

            setRecipes(data);
        }

        fetchData();
    
    }, []);

   
    async function handleDelete(id: number) {
        try {
            axios.delete('http://localhost:3001/recipe/' + id)

        setRecipes((prevRecipes) => {
            return prevRecipes.filter(recipe => recipe.id !== id);
        } )
        } catch(e) {
            alert("Fehler");
        }
    }

    return (<div>
                <h1>{headline}</h1>
                
                {
                    recipes.map((recipe) => (
                        <RecipeListItem 
                        recipe={recipe} 
                        key={recipe.id} 
                        onDelete={handleDelete}/>
                    ))
                }


                
        </div>);
}

export default RecipeList;