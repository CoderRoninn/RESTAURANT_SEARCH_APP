/**
 * Filters businesses array by price level
 * Used in: src/screens/SearchScreen.js
 */
const filterBusinessesByPrice = (businesses, priceLevel) => {
    return businesses.filter(business => business?.price === priceLevel);
};

export default filterBusinessesByPrice;

