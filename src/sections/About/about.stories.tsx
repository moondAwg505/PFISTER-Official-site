import type { Meta, StoryObj } from '@storybook/react';
import { About } from './about'; // Проверь правильность пути и регистра твоего файла

const meta: Meta<typeof About> = {
  title: 'Sections/About', // Группируем в папке Sections
  component: About,
  parameters: {
    // Чтобы секция отображалась на всю ширину окна, как на реальном сайте
    layout: 'fullscreen', 
  },
  argTypes: {
    // Даем возможность менять пропс id прямо из панели управления Storybook
    id: { control: 'text', description: 'HTML id attribute for anchor links' },
  },
};

export default meta;

type Story = StoryObj<typeof About>;

// Базовое состояние компонента
export const Default: Story = {
  args: {
    id: 'about', // Передаем дефолтный id
  },
};