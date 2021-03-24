// тут собираются все отдельные компоненты и отправляются в <App/> в index.js

import React from 'react';

import { Header} from './сomponents';  // первым делом ищет index.js
//import SortPopup from './сomponents/SortPopup';
// import Header from './сomponents'; // формат указывать не обязательно
import  { Home, Cart } from './pages';
import {Route} from 'react-router-dom';

import axios from 'axios';

//function Button() { // не обычная функция, а функциональный компонент
//  return <button>Добавить</button>  // функция возвращает HTML
//} // называется с большой буквы, значит React воспринимает как компонент

function App() { // функциональный компонент, HTML преобразуется в JS
 // const clickPoKnopke = () => {
 //   alert('Hello!');
 // }

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => { // будет выполняться единожды при первом рендере --- js fetch, fetch возвращает promise (получение ассинхронных данных, в данном случае db.json)
    axios.getUri('http://localhost:3000/db.json').then(({data}) => {  // ------------------------------ axios для более крупных проектов
      setPizzas(data.pizzas);
    }
    )


    // fetch('http://localhost:3000/db.json') --------------- fetch
    // .then((resp) => resp.json())
    // .then((json) => {
    //   setPizzas(json.pizzas);
    // });
  },[]);


  return ( // тут используется JSX, в JS можно писать HTML код
    //React.createElement('div', null, 'Hello World') - можно так
    //<div><h1>Hello World</h1></div> - а с JSX можно так
<div className="wrapper">
      <Header/>

      <div className="content">
        <Route path="/" render={() => <Home items={pizzas}/>} exact/> 
        {/* если чето отрендерить то надо рендер писать */}
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  )
}

export default App;
