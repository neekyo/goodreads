import { useState } from 'react';
import { fetchBooks } from '../utils/googleBooks';
import BookCard from './BookCard';
import { Book } from '../types'

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const result = await fetchBooks(query);
      setBooks(result);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for books..." 
      />
      <button onClick={handleSearch}>Search</button>
      
      {error && <p>{error}</p>}

      <div>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
