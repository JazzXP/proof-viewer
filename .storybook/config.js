import { configure, addDecorator } from "@storybook/react";

import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "state/UserData-reducer";

const store = createStore(rootReducer);

addDecorator((S) => (
  <Provider store={store}>
    <S />
  </Provider>
));

configure(require.context("../src", true, /\.stories\.js$/), module);
