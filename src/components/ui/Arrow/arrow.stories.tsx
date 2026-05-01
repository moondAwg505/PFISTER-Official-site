import type { Meta, StoryObj } from "@storybook/react";
import { Arrow } from "./arrow";

const meta: Meta<typeof Arrow> = {
  title: "UI/Arrow",
  component: Arrow,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Arrow>;

export const Right: Story = {
  args: {
    direction: "right",
  },
};

export const Left: Story = {
  args: {
    direction: "left",
  },
};
