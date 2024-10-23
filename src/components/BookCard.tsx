import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-700 mb-2">by {book.author}</p>
      <p className="text-gray-600 text-sm mb-2">Rating: {book.rating}</p>
      <p className="text-gray-500 text-sm">{book.description}</p>
    </div>
  );
};

export default BookCard;
