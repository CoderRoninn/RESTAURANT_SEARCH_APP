/**
 * Custom hook for managing restaurant data and fetching
 * Used in: src/screens/SearchScreen.js
 */
import { useState, useEffect, useMemo } from 'react';
import RestaurantService from '../api/fetchRestaurants';
import log from '../helper/logger';
import FUNCTION_DEFAULT_PARAMETER from '../constants/api/functionDefaultParameter';

const useRestaurants = () => {
    const [businessesState, setBusinessesState] = useState([]);
    const [errorMessageState, setErrorMessageState] = useState('');
    
    const restaurantService = useMemo(() => new RestaurantService(), []);

    const fetchAllRestaurants = async (searchTerm = FUNCTION_DEFAULT_PARAMETER.SEARCH_TERM) => {
        try {
            setErrorMessageState('');
            const data = await restaurantService.fetchRestaurants(searchTerm);
            setBusinessesState(data);
            log.info('[useRestaurants] fetchAllRestaurants success');
        } catch (error) {
            log.error('[useRestaurants] fetchAllRestaurants failed', error);
            setErrorMessageState('Something went wrong');
            //TO:DO add error message for UI(ALERT)
        }
    };

    useEffect(() => {
        fetchAllRestaurants();
    }, []);

    return [
        businessesState,
        errorMessageState,
        fetchAllRestaurants,
    ];
};

export default useRestaurants;

