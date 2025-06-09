const axios = require('axios');

const BASE_URL = 'http://localhost:3030';

async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/books/author/${encodeURIComponent(author)}`);
    console.log(`Books by Author "${author}":`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching books by author:', error.message);
  }
}

// เรียกใช้งาน
getBooksByAuthor('Jane Smith');
