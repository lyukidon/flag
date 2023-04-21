import React from 'react';
import { createGlobalStyle } from 'styled-components';
import GameTemplate from './comp/GameTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: aliceblue;
  }
`;

function App() {
  
  return (
    <>
      <GlobalStyle />
      <GameTemplate />
    </>
  );
}

export default App;