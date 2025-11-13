/**
 * Search API parameter constants 
 * Used in: src/api/fetchRestaurants.js
 */


const ENDPOINTS = Object.freeze({
    SEARCH: '/search',
});

const MAX_RESULT_COUNT = Object.freeze({
    SEARCH_LIMIT: 50,
});

const SEARCH_PARAMS = Object.freeze({
    LOCATION: 'Istanbul',
    CATEGORIES: 'restaurants',
    RADIUS: 10000,
});

export { ENDPOINTS, MAX_RESULT_COUNT, SEARCH_PARAMS };
