// Типы для карточки авто
export interface Icar {
  id: number;
  name: string;
  image: string;
  category: "main" | "other";
}

// Типы для кнопок навигации
export interface INavItem {
  id: number;
  label: string;
  path: string;
}
