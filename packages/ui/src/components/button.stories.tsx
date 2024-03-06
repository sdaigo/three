import { Button } from "./button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me!",
  },
};

export default meta;
