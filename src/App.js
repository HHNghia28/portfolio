import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { materialTealTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={materialTealTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={materialTealTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
