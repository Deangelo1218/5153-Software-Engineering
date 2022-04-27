import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className='recipes-result'>
      {/* className={style.recipe} */}
        <h1 >{title}</h1>
        <ol>
            {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>Calories intake: {calories}</p>
        <img src={image} alt=''/>
      
    </div>
  )
}

export default Recipe;
