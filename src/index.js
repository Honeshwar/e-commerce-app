import React from "react";
import { createRoot } from "react-dom/client";//new way react 18 way. ReactDom.render( , ); react 17 way depreciated in react 18
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = createRoot(document.getElementById("root"));
root.render(//root prototype render func ho ga, app comp render/display
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>,
);
