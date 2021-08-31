import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles, ThemeProvider} from "@agauravdev/matcha-ui";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
          <GlobalStyles/>
        <App/>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
