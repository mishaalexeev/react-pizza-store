import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../сomponents';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={
            ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'] // массив
          }
        />
        <SortPopup items={['популярность', 'цена', 'алфавит']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} /> // все св-ва что есть внутри объекта будут переброшены в PizzaBlock
        ))}
      </div>
    </div>
  );
}

export default Home;
