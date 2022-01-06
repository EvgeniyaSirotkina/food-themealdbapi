import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props;


    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span class="card-title activator grey-text text-darken-4">{strCategory}<i class="material-icons right">more_vert</i></span>
            </div>
            <div className="card-action">
                <Link to={`/food-themealdbapi/category/${strCategory}`} className='btn deep-purple accent-1'>Watch category</Link>
            </div>
            <div className="card-reveal">
                <span class="card-title grey-text text-darken-4">{strCategory}<i className="material-icons right">close</i></span>
                <p>{strCategoryDescription}</p>
            </div>
        </div>
    );
}

export default CategoryItem;
