import MealItem from './MealItem';

const MealList = (props) => {
    const { meals } = props;
    return (
        <div className='list-meal-categories'>
            {
                meals.length &&
                meals.map(meal => (
                    <MealItem key={meal.idMeal} {...meal} />))
            }
        </div>
    );
}

export default MealList;
