import { API_URL } from './config';

export const getAllMealCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}

export const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
}

export const getRandomMeal = async () => {
    const response = await fetch(API_URL + 'random.php');
    return await response.json();
}

export const getMealFiltredByCategory = async (categoryName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return await response.json();
}

export const getMealFiltredByArea = async (areaName) => {
    const response = await fetch(API_URL + 'filter.php?a=' + areaName);
    return await response.json();
}