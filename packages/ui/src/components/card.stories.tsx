import { Card } from "./card";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    title: "google",
    children: "hello",
    href: "http://www.google.com",
  },
};

export default meta;
