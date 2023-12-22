import { useState } from "react";

function Workshop(props) {
    // Listeyi oluştur
    // Ekleme fonk
    // Çıkarma fonk.
    // Diğer işlemler..
    // 11:00
    console.log(props);

    const [activity, setActivity] = useState("")
    const [todoList, setTodoList] = useState(["Aktivite 1", "Aktivite 2"]);

    const add = () => {
        // validation
        setTodoList([...todoList, activity]);
    }

    const remove = (activity) => {
        let newList = todoList.filter(todo => todo !== activity);
        setTodoList(newList);
    }


    // Two Way Data Binding
    // Input değişir => değişken değişir
    // Değişkeni değişir => Input değişir
    return <div className='center'>
        <input value={activity} onChange={(event) => { setActivity(event.target.value) }} type="text" />
        <button onClick={() => { add(); }} type='button'>Ekle</button>
        <ul>
            {todoList.map(todo => <li key={todo}>{todo} <button onClick={() => { remove(todo); }}>X</button></li>)}
        </ul>

        <button onClick={() => { props.func("deneme"); }}>App.js'deki Fonksiyonu Çalıştır</button>
    </div>
}

export default Workshop;