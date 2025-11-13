/**
 * Restaurant service class for fetching restaurants from API
 * Used in: src/hooks/useRestaurants.js
 */
import RequestService from './request';
import log from '../helper/logger';
import { ENDPOINTS, SEARCH_PARAMS, MAX_RESULT_COUNT } from '../constants/api/places';


class RestaurantService {
  //Create instance 
  requestService = new RequestService();

  /**
   * Fetches restaurants from API based on search term
   * @param {string} searchTerm - The search term to find restaurants
   * @param {Object} parameters - Search parameters object
   * @param {string} parameters.term - The search term
   * @param {string} parameters.location - Location for search (Istanbul)
   * @param {string} parameters.categories - Categories to filter (restaurants)
   * @param {number} parameters.limit - Maximum number of results (50)
   * @param {number} parameters.radius - Search radius in meters (10000)
   * @returns {Promise<Array>} Array of restaurant business objects
   */
  async fetchRestaurants(searchTerm) {
    try {
      const parameters = {
        term: searchTerm,
        location: SEARCH_PARAMS.LOCATION,
        categories: SEARCH_PARAMS.CATEGORIES,
        limit: MAX_RESULT_COUNT.SEARCH_LIMIT,
        radius: SEARCH_PARAMS.RADIUS,
      };

      const response = await this.requestService.get(ENDPOINTS.SEARCH, { params: parameters });
      log.info('[fetchRestaurants] Fetch restaurants successful');
      return response?.data?.businesses || [];
    } catch (error) {
      log.error('[fetchRestaurants] Fetch restaurants failed');
      throw error;
    }
  }
}

export default RestaurantService;