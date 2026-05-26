import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ErrorPage } from "./errorPage";

const meta = {
  title: "Pages/ErrorPage", // Группируем в папку Pages в боковом меню Storybook
  component: ErrorPage,
  parameters: {
    // Убираем стандартные отступы Storybook, так как это полноценная страница
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      // Оборачиваем компонент в роутер, чтобы внутренние <Link> работали корректно
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
