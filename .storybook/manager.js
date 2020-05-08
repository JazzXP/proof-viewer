import { themes } from "@storybook/theming/create";
import { addons } from "@storybook/addons";
import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";

addDecorator(StoryRouter());

addons.setConfig({
  theme: themes.dark,
});
