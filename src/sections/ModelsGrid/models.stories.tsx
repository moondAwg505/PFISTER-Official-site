import type { Meta, StoryObj } from '@storybook/react';
import { ModelGrid } from './models'; // Убедись, что имя файла совпадает

const meta: Meta<typeof ModelGrid> = {
  title: 'Sections/ModelsGrid', // Кладем к остальным крупным секциям
  component: ModelGrid,
  parameters: {
    // Секция должна растягиваться на весь экран, как на реальном сайте
    layout: 'fullscreen', 
  },
};

export default meta;

type Story = StoryObj<typeof ModelGrid>;

// Базовое (и пока единственное) состояние компонента
export const Default: Story = {};