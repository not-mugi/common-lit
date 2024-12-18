import { fn } from "@storybook/test";

import { Button } from "@common";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Common/Button",
  tags: ["autodocs"],
  render: (args) => Button(args),
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark", "mugi"],
    },
    stretch: { control: "boolean" },
  },
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light = {
  args: {
    theme: "light",
    label: "Button",
  },
};

export const Dark = {
  args: {
    theme: "dark",
    label: "Button",
  },
};

export const Mugi = {
  args: {
    theme: "mugi",
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Stretch = {
  args: {
    size: "medium",
    label: "Button",
    stretch: true,
  },
};
