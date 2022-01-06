import CategoryItem from './CategoryItem';

const CategoryList = (props) => {
    const { catalog } = props;
    return (
        <div className='list-meal-categories'>
            {
                catalog.length &&
                catalog.map(category => (
                    <CategoryItem key={catalog.idCategory} {...category} />))
            }
        </div>
    );
}

export default CategoryList;
