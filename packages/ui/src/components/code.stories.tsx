import { Code } from "./code";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Code> = {
  title: "Example/Code",
  component: Code,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof Code>;

export const Primary: Story = {
  args: {
    children: "helloworld",
  },
};

export default meta;
