const axios = require('axios');

const BASE_URL = ' http://localhost:3030/api'; // เปลี่ยนเป็น API จริงของคุณ

async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    console.log('List of books:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
}

getAllBooks();
