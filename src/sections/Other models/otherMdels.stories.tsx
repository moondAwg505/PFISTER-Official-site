import type { Meta, StoryObj } from '@storybook/react';
import { OtherModels } from './otherModels'

const meta: Meta<typeof OtherModels> = {
  title: 'Sections/OtherModels',
  component: OtherModels,
  parameters: {

    layout: 'fullscreen', 
  },
};

export default meta;
type Story = StoryObj<typeof OtherModels>;


export const Default: Story = {};