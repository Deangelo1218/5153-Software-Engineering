import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Icon } from '../components/Signin/SigninElements';
// import {Icon} from './c'

const ProductPage = () => {
    const { id } = useParams()
    const url = `https://625c8a3bc9e78a8cb9b89fa4.mockapi.io/food/${id}`
    const [food, setFood]  = useState(null)

    let content = null


    useEffect(() =>{
        axios.get(url)
        .then(response =>{
            setFood(response.data)
        })
    },[url]);

    if(food){
        content = 
        <div>
            <Icon to="/">Sauté</Icon>
            <h2 className='text-2xl font-bold mb-3' >{food.name}</h2>
            <div>
                <img src={food.images} alt={food.name}/>
            </div>
            <div className='font-bold text-xl mb-3'>
                $ {food.price}
            </div>
            <div>
                {food.material}
            </div>
        </div>
        
    }


    return(
        <div>
            {content}
        </div>
    )

 
}

export default ProductPage
