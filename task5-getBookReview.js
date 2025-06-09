const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function getBookReview(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/books/review/${isbn}`);
    console.log(`Reviews for book ISBN ${isbn}:`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching book review:', error.message);
  }
}

// เรียกใช้งาน
getBookReview('978-0-123456-47-2');
