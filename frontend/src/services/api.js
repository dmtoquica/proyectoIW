import axios from 'axios';

const API_URL = 'http://localhost:5003'; // URL del servidor Express

// Función para enviar credenciales de login
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password
    });
    return response.data; // Devuelve la respuesta del servidor
  } catch (error) {
    console.error('Error en la solicitud de login:', error);
    throw error;
  }
};
