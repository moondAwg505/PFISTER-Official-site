import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './title'; // Убедись, что путь и регистр совпадают с твоим файлом

const meta: Meta<typeof Title> = {
  title: 'UI/Title', // Логично положить его в папку UI, так как это базовый элемент
  component: Title,
  argTypes: {
    // Говорим Storybook, что children можно редактировать как обычный текст
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

// Базовое состояние
export const Default: Story = {
  args: {
    children: 'Title',
  },
};

// Пример того, как можно протестировать прокидывание класса
export const WithCustomClass: Story = {
  args: {
    children: 'Models',
    className: 'test-custom-class', // В реальном проекте сюда прилетит styles.какой_то_класс
  },
};