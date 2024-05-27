import { useState, useEffect } from "react";
import Ingredients from "../Components/Ingredients"
import plus from '../assets/plus.svg';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

export default function RecipeForm() {
    let { id } = useParams();
    let [ingredients, setIngredients] = useState([]);
    let [newIngredient, setNewIngredient] = useState('');

    let[title, setTitle]=useState('');
    let[description, setDescription]= useState('');
    let[errors,setErrors]=useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        let fetchRecipe = async () => {
            if (id) {
                let res = await axios.get('http://localhost:4000/api/recipes/' + id);
                if (res.status === 200) {
                    setTitle(res.data.title);
                    setDescription(res.data.description);
                    setIngredients(res.data.ingredients);
                }
            }
        }

        fetchRecipe();
    }, [id])

    let addIngredient = () => {
        setIngredients(prev => [newIngredient, ...prev])
        setNewIngredient('');
    }

    let createRecipe =async(e)=>{
        try {
            e.preventDefault();
            let recipe = {
                title,
                description,
                ingredients
            }
            setTitle('');
            setDescription('');
            
            let res;
            if (id) {
                res = await axios.patch('http://localhost:4000/api/recipes/' + id, recipe);
            } else {
                res = await axios.post('http://localhost:4000/api/recipes', recipe);
            }
            console.log(res);

            if(res.status==200){
                navigate('/')
            }
        } catch (e) {
            setErrors(Object.keys(e.response.data.errors));
        }
    }
    return (
        <div className="mx-auto max-w-md border-2 border-white p-4">
            <h1 className="mb-6 text-2xl font-bold text-orange-400 text-center">Recipe {id ? 'Edit' : 'Create'} Form</h1>
            <form className="space-y-5" onSubmit={createRecipe}>
                <ul className='list-disc pl-3'>
                    {!!errors.length && errors.map((error, i) => (
                        <li className='text-red-500 text-sm' key={i}>{error} is invalid value</li>
                    ))}
                </ul>
                <input value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder="Recipe Title" className="w-full p-1" />
                <textarea value={description} onChange={e=> setDescription(e.target.value)} placeholder="Recipe Description" rows="5" className="w-full p-1" />
                <div className="flex space-x-2 items-center">
                    <input type="text" value={newIngredient} onChange={e => setNewIngredient(e.target.value)} placeholder="Recipe Ingredient" className="w-full p-1" />
                    <img src={plus} alt="" className='cursor-pointer' onClick={addIngredient}/>
                </div>
                <div>
                    <Ingredients  ingredients={ingredients} />
                </div>
                <button type="submit" className='w-full px-3 py-1 rounded-full bg-orange-400 text-white'>{id ? 'Update' : 'Create '} Recipe</button>
            </form>
        </div>
    )
}
