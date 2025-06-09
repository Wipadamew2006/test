const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/books/title/${encodeURIComponent(title)}`);
    console.log(`Books with Title matching "${title}":`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching books by title:', error.message);
  }
}

// เรียกใช้งาน
getBooksByTitle('Node');
