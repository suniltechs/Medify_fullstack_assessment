import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data, // Directly return the data
  (error) => {
    if (error.response) {
      // Server responded with a status code outside 2xx
      const apiError = {
        message: error.response.data?.message || 'Request failed',
        status: error.response.status,
        data: error.response.data,
      };
      console.error('API Error:', apiError);
      return Promise.reject(apiError);
    } else if (error.request) {
      // Request was made but no response received
      console.error('API Error: No response received', error.request);
      return Promise.reject({ message: 'No response from server' });
    } else {
      // Something happened in setting up the request
      console.error('API Error:', error.message);
      return Promise.reject({ message: error.message });
    }
  }
);

// Products API methods
export const productService = {
  getAll: (search = '') => api.get('/products', { params: { search } }),
  getById: (id) => api.get(`/products/${id}`),
  create: (productData) => api.post('/products', productData),
  update: (id, productData) => api.put(`/products/${id}`, productData),
  delete: (id) => api.delete(`/products/${id}`),
};

export default api;