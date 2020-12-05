import React from 'react';
import { createGlobalStyle } from 'styled-components';
import GameTemplate from './comp/GameTemplate';

// let click = 0;

// document.getElementsByClassName('button').addEventListener('click',function(){
//   return click++;
// })

const GlobalStyle = createGlobalStyle`
  body {
    background: aliceblue;
  }
`;

// const startButton = () => {
//   if (click%2 === 0){
//     document.getElementsByClassName('page').innerHTML = '<Box/>'
//   }else{
//     document.getElementsByClassName('page').innerHTML = '<InGame/>'
//   }
// }
// startButton();

function App() {
  return (
    <>
      <GlobalStyle />
      <GameTemplate />
    </>
  );
}

export default App;