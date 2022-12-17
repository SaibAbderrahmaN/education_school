import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';



import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
window.store = store;


root.render(
  <Provider store={store}>

  <StrictMode>

    <App />
  </StrictMode>
  </Provider>
);

serviceWorker.unregister();

