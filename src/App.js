import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

// Javascript Xml
// JSX => Javascript + HTML => isim karışıklığı
function App() {
  // değiştiğinde UI'i da update edecek değişken
  //useState => react fonksiyon (react hooks)
  let totalCount = 0;

  // const [getter, setter] = useState(initial)
  const [total, setTotal] = useState(0);

  const increase = () => {
    setTotal(total + 1);
  }
  const decrease = () => {
    setTotal(total - 1);
  }

  return (
    <>
      <p>Toplam Tıklama Sayısı: {total}</p>
      <button onClick={() => {
        increase();
      }}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}
// export const variable = 1;
// export const variable2 = 2;
// const variable3 = 3;
export default App;