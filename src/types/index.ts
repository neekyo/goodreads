export interface Book {
  id: string;
  title: string;
  author: string;
  rating?: number;
  description?: string;
  coverImage?: string;
}

export interface User {
  id: string;
  username: string;
  name?: string;
  avatar?: string;
  booksRead?: string;
  favoriteBooks?: string;
}