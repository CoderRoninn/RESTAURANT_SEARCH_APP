/**
 * HTTP request service class
 * Used in: src/api/fetchRestaurants.js
 */
import client from './client';
import log from '../helper/logger';

class RequestService {
  /**
   * HTTP GET request
   * @param {string} url - Request URL
   * @param {Object} config - Request configuration
   * @returns {Promise} Axios response
   */
  async get(url, config = {}) {
    try {
        const response = await client.get(url, config);
        log.info('[request.get] Request successful');
        return response;
    } catch (error) {
      log.error('[request.get] Request failed');
      throw error;
    }
  }
}

export default RequestService;

