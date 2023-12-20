import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';

// Javascript Xml
// JSX => Javascript + HTML => isim karışıklığı
function App() {
  // değiştiğinde UI'i da update edecek değişken
  //useState => react fonksiyon (react hooks)
  //useEffect (fonksiyon, [dep_list])
  let totalCount = 0;

  // const [getter, setter] = useState(initial)
  const [total, setTotal] = useState(0);

  const increase = () => {
    setTotal((prevState) => { return prevState + 1; }); // async
  }

  const decrease = () => {
    setTotal(total - 1); // async
  }
  // her sayfa açılışı useEffect'i etkiler
  // dep listdeki değişkenlerden herhangi biri değiştiğinde tetiklenir.
  useEffect(() => {
    console.log("use effect çalıştı")
  }, []);

  useEffect(() => {
    console.log("use effect (dependencyli) çalıştı")
    console.log(total);
  }, [total]);

  // useState
  // useEffect 

  // Inputtan değer okumak
  // Listeyi jsx'de iterate etmek
  return (
    <>
      {/* <p>Toplam Tıklama Sayısı: {total}</p>
      <button onClick={() => {
        increase();
      }}>+</button>
      <button onClick={decrease}>-</button> */}


      <div className='center'>
        <input type="text" />
        <button type='button'>Ekle</button>
        <ul>
          <li>Todo 1 <button>X</button></li>
        </ul>
      </div>
    </>
  );
}
// export const variable = 1;
// export const variable2 = 2;
// const variable3 = 3;
export default App;

// 11:10