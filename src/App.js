import React from 'react';
import InGame from './comp/InGame';
import picture from './flag/South_Korea.svg';

const obj = {
  img: picture,
  country: '대한민국'
}

function App() {
  return (
    <header>
      <InGame flag={obj.img} country={obj.country}/>
    </header>
  );
}

export default App;