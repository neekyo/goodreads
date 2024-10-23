import { Book } from '../types';

const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://example.com/gatsby.jpg',
    rating: 4.5,
    description: 'A novel set in the 1920s about the American dream.',
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverImage: 'https://example.com/mockingbird.jpg',
    rating: 4.8,
    description: 'A story about the serious issues of race, class, gender, and justice in the Deep South.',
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    coverImage: 'https://example.com/1984.jpg',
    rating: 4.7,
    description: 'A dystopian novel set in a totalitarian regime that uses surveillance and propaganda.',
  },
];

export default mockBooks;
