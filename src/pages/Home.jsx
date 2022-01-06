import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllMealCategories } from '../api'

import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';

const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const filterFunc = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate(`${pathname}?search=${str}`);
    };

    useEffect(() => {
        getAllMealCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                        item.strCategory
                            .toLowerCase()
                            .includes(search.split('=')[1].toLowerCase())
                    )
                    : data.categories
            );
        })
            .catch(error => console.dir(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <>
            <Search filterFunc={filterFunc} />
            {
                !catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />
            }
        </>
    );
}

export default Home;