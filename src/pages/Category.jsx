import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealFiltredByCategory } from '../api'

import Preloader from '../components/Preloader';
import MealList from '../components/MealList';

const Category = () => {
    const [meals, setMeals] = useState([]);
    const { name = '' } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMealFiltredByCategory(name)
            .then(data => setMeals(data.meals))
            .catch(error => console.log(error));
    }, [name]);

    return (
        <>
            <button onClick={() => navigate(-1)} className='btn deep-purple accent-1'>Go Back</button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export default Category;
