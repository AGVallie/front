import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../components/common/Button";

const meta = {
  title: "common/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};
export const Gray: Story = {
  args: {
    gray: true,
    children: "Gray",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled(unclickable)",
  },
};
export const RoundedFull: Story = {
  args: {
    roundedFull: true,
    children: "RoundedFull",
  },
};
export const Custom: Story = {
  args: {
    className: "bg-secondary px-48 rounded-none",
    onClick: () => alert("Custom action"),
    children: "Custom",
  },
};
