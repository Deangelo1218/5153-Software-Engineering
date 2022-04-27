import React, { useEffect , useState} from 'react'
import Recipe from './recipe';
import { Icon } from '../Signin/SigninElements';
import "./App.css";

const Search = () => {


    //APP_ID and APP_KEY to access free API from edeman
    

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    //Default query param = chicken
    const [query, setQuery] = useState("chicken");


    //this re-renders when the page only when the query param is ran on submit to the form
    useEffect(() =>{
        getRecipes();
    },[query]);

    //fetches the data from the api packaging it as a list of objects and only puts out the hits from the data
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)   
        const data = await response.json();
        // console.log(data.hits);
        setRecipes(data.hits);
    }

    //displays the information when typed 
    const updateSearch = e =>{
        setSearch(e.target.value);
        // console.log(search);
    }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }





  return (
    <div className='Search'>
        <Icon to="/">Sauté</Icon>
        <form className='search-form' onSubmit={getSearch}>
            <input className ="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button className = "search-button" type = "submit">Search</button>
        </form> 

        <div className='search-results'>
        {recipes.map(recipe => (
            <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label} calories= {recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            />
        ))}
        </div>

      

    </div>
   
  )
}

export default Search
