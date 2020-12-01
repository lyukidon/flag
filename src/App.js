import React from 'react';
import Box from './Box';
import InGame from './InGame';

let click = 0;

// document.getElementsByClassName('button').addEventListener('click',function(){
//   return click++;
// })

const startButton = () => {
  if (click%2 === 0){
    document.getElementsByClassName('page').innerHTML = '<Box/>'
  }else{
    document.getElementsByClassName('page').innerHTML = '<InGame/>'
  }
}
startButton();

function App() {
  return (
    <div className='page'>
      <Box/>
      <InGame/>
    </div>
  );
}

export default App;