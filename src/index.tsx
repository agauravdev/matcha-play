import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles, ThemeProvider} from "@agauravdev/matcha-ui";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
          <BrowserRouter>
              <GlobalStyles/>
              <App/>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
