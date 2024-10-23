export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage?: string;
  rating?: number;
  publishedDate?: string;
  imageLinks?: { thumbnail?: string };
}

export interface User {
  id: string;
  username: string;
  email?: string;
  name?: string;
  avatar?: string;
  booksRead?: string;
  favoriteBooks?: string;
}