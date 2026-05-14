import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Sections/Footer",
  component: Footer,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
