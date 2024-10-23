import BookCard from './components/BookCard'; // Adjust the path as necessary
import { Book } from './types'; // Adjust the path as necessary

// Sample book object adhering to the Book interface
const sampleBook: Book = {
  id: '1',
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  coverImage: 'https://example.com/gatsby.jpg', // Replace with a valid image URL
  rating: 4.5,
  description: 'A novel set in the 1920s about the American dream.',
};

function App() {
  return (
    <div className="container mx-auto p-4">
      <BookCard book={sampleBook} />
    </div>
  );
}

export default App;
