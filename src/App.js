import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import GameTemplate from "./comp/GameTemplate";

import Start from "./pages/GameStart";

const GlobalStyle = createGlobalStyle`
  body {
    background: aliceblue;
  }
`;

function App() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <GlobalStyle />
            {!toggle ? <Start setToggle={setToggle} /> : <GameTemplate />}
        </>
    );
}

export default App;
