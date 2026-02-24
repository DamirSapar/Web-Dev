export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  likes: number; // Добавили лайки
  image: string;
  images: string[];
  link: string;
  categoryId: number; // Ссылка на категорию
}