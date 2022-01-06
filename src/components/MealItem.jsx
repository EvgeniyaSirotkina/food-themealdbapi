import { Link } from 'react-router-dom';

const MealItem = (props) => {
    const {
        idMeal,
        strMeal,
        strMealThumb
    } = props;


    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/food-themealdbapi/meal/${idMeal}`} className='btn deep-purple accent-1'>Watch meal</Link>
            </div>
        </div>
    );
}

export default MealItem;
