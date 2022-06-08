import * as React from "react";
import { ThemeProvider } from "styled-components";
import Main from "./pages/Main";
import GlobalStyle from "./style/GlobalStyle";
import { theme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
