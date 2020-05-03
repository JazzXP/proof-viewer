import { themes } from "@storybook/theming/create";
import { addons } from "@storybook/addons";

addons.setConfig({
  theme: themes.dark,
});

document.addEventListener("mousemove", () => {
  window.isMouse = true;
});
