import './2-components.css'
import React from 'react';
import { useState } from 'react';
import { getRecipeFromMistral } from '../ai';
import ReactMarkdown from 'react-markdown'; 

function Header() {
    return (
      <header>  
            <img src="/image.png" alt="chef-claude-logo" />
            <p>Chef Claude</p>
      </header>
    )
}



function Main(){
    const [ingredients,updateIngredients] = useState(['potato','tomato','egg','onions', 'spices']);
    const [article,setAritcle] = useState("");
    const IngredientsList = 
        ingredients.map((ingredient, index)=>{
            return <li key={index}>{ingredient}</li>
    })
   

    //Using useRef
    const recipeSection = React.useRef(null);

    //Using useEffect for useRef
    React.useEffect(()=>{
        if(article.trim()!='' && recipeSection.current != null ){
            console.log('recipeSection:', recipeSection.current); // Debug

            recipeSection.current.scrollIntoView({behavior:'smooth',block:'start'});
        }
    },[article])


    async function showArticle(){
            const response = await getRecipeFromMistral(ingredients);
            setAritcle(response);
            console.log(response)
    }
    function HandleFormSubmit(formdata /* or event*/){
        // event.preventDefault();
        // const formdata = new FormData(event.currentTarget);
        // const value = formdata.get('Ingredient');
        // updateIngredients(prevIngredients => [...prevIngredients,value]);     
        // console.log(ingredients);
        const value = formdata.get('Ingredient');
        updateIngredients(previousIngredients => [...previousIngredients,value]);
    }   

    return(

        <main>
            <form /*onSubmit={HandleFormSubmit}*/ action={HandleFormSubmit}> 
                <input placeholder="e.g corriander" name='Ingredient'></input>
                <button>+add </button>
            </form>
            {ingredients.length > 0 && <section><div className='ingredients-list'>
                <h2>Ingredients on Hand</h2>
                <ul >
                    {IngredientsList}
                </ul>
                </div>
                {ingredients.length > 3 && < Recipe /> }
                {/* < Article /> */}
                {article && <h2 className='message'>Here is your Recipe</h2>}
                <div className="ai-response" ref={recipeSection}>     
                <ReactMarkdown>{article}</ReactMarkdown>
                </div>
            </section>
            }
        </main>

    )

    function Recipe(){
        return(
            <recipe>
                <div>
                    <h2>Ready for recipe?</h2>
                    <p>Generate a recipe from your list of ingredients<button type='button' className='recipe-btn' onClick={showArticle}>Get a recipe</button></p>
                    </div>
            </recipe>
        )
    }
}




// function Article(){
//     return (
//     <article>
//         <h2>Suggested Recipe</h2>
//         <p>Based on your available ingredients, I would recommend making a Creamy Garlic Parmesan Chicken dish. Here’s the recipe:</p>

//            <ul> Ingredients:
//                 <li>4 boneless, skinless chicken breasts</li>
//                 <li>Salt and pepper to taste</li>
//                 <li>ablespoons olive oil</li>
//                 <li>4 cloves garlic, minced</li>
//                 <li>1 cup heavy cream</li>
//                 <li>1/2up chicken broth</li>
//                 <li>1 teaspoon Italian seasoning</li>
//                 <li>1/2up grated Parmesan cheese</li>
//                 <li>1 cup fresh spinach (optional)</li>
//                 <li>1/2up sun-dried tomatoes (optional)</li>
//                 <li>Fresh parsley for garnish   </li>
//             </ul>  	
            	
//             <p>Instructions:</p>
//             <ol>
//                 <li>Season the Chicken: Season the chicken breasts with salt and pepper on both sides.</li>
//                 <li>Cook the Chicken: In a large skillet, heat the olive oil over medium-high heat. Add the chicken breasts and cook for 5-7 minutes on each side, or until golden brown and cooked through.</li> Remove the chicken from the skillet and set it aside.
//                 <li>Sauté Garlic: In the same skillet, reduce the heat to medium. Add the minced garlic and sauté for about 1 minute until fragrant.</li>
//                 <li>Make the Sauce: Add the heavy cream, chicken broth, and Italian seasoning to the skillet. Stir to combine and bring the mixture to a simmer.</li>
//                 <li>Add Parmesan: Stir in the Parmesan cheese and let it melt into the sauce. Continue to simmer for about 2 minutes until the sauce thickens slightly.</li>
//                 <li>Optional Add-ins: If using, add the fresh spinach and sun-dried tomatoes to the sauce. Cook for an additional 2 minutes until the spinach is wilted.</li>
//                 <li>Combine with Chicken: Return the chicken breasts to the skillet, spooning the sauce over them. Let everything simmer together for a couple of minutes until the chicken is heated through.</li>
//                 <li>Serve: Garnish with fresh parsley and serve the chicken with the creamy garlic Parmesan sauce over pasta, rice, or mashed potatoes.</li>
//             Enjoy!
//             </ol>
//     </article>
//     )
// }
export {Header,Main};