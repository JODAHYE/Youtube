import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import Nav from "./components/common/nav/Nav";
import Play from "./pages/Play";
import Main from "./pages/Main";
import Search from "./pages/Search";
import GlobalStyle from "./style/GlobalStyle";
import { theme } from "./style/theme";

function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Nav />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="results*" element={<Search />} />
                    <Route path="play" element={<Play />} />
                </Routes>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
