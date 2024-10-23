import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

export const fetchBooks = async (query: string) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
      params: {
        q: query,
        key: API_KEY,
      },
    });

    return response.data.items; // Return the array of books
  } catch (error) {
    // Type guard to ensure error is an Axios error or a generic Error
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific error
      throw new Error(`Failed to fetch books: ${error.message}`);
    } else if (error instanceof Error) {
      // Handle generic Error
      throw new Error(`Failed to fetch books: ${error.message}`);
    } else {
      // Handle unknown error
      throw new Error('An unknown error occurred while fetching books.');
    }
  }
};
