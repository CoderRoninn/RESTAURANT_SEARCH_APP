/**
 * HTTP client for external APIs.
 * Base URL: read from EXPO_PUBLIC_BASE_URL(.env)
 * Auth: Bearer token from EXPO_PUBLIC_API_KEY (.env)
 */
import axios from 'axios';
import { TIMING } from '../constants/api/timing';


export default axios.create({
	baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    timeout: TIMING.REQUEST_TIMEOUT_MS,
    // Header for API key Authorization: Bearer <token>
    headers: {
        Authorization: process.env.EXPO_PUBLIC_API_KEY 
    }
});
