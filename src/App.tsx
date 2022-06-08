import * as React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Nav from "./components/common/nav/Nav";
import Main from "./pages/Main";
import GlobalStyle from "./style/GlobalStyle";
import { theme } from "./style/theme";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Main />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
