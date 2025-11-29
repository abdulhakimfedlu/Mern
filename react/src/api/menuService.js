import api from './axios';

/**
 * Fetch all food items from the backend
 * @returns {Promise<Array>} Array of food items
 */
export const getFoodItems = async () => {
    try {
        const response = await api.get('/items');
        return response.data;
    } catch (error) {
        console.error('Error fetching food items:', error);
        throw error;
    }
};
