import { useState, useEffect } from 'react';
import { getAllMealCategories } from '../api'

import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';

const Home = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllMealCategories().then(data => {
            setCatalog(data.categories);
        })
            .catch(error => console.dir(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                !catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />
            }
        </>
    );
}

export default Home;