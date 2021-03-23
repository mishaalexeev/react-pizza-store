import React from 'react' // rfce

function SortPopup({ items }) {
    const [visiblePopup, setVisiblePopup] = React.useState(false); // при вызове функции передается фолс в висиблПопуп, ф-ия нужна чтобы менять переменную и выполнять ререндер
    const [activeItem, setActiveItem] = React.useState(0);

    const sortRef = React.useRef(); // usRef - ссылка на какие-то данные, в react так правильно, может принимать пропсы, дом-эл-ты и тд
    // useRef - это хук который нужен чтобы хранить актуальные значения
   // const activeItem = 0;
    //console.log(sortRef.current)

    const activeLabel = items[activeItem];


    const toggleVisiblePopup = () => { // чтобы не делать анонимную функцию ?? для производительности, чтобы не производился ререндер. при апдейте компонента не будет лишнего ререндера
        setVisiblePopup(!visiblePopup);
    };

    React.useEffect(() => { // useEffect следит за эффектом компонента (за исчезновением его и вроде того) 
        document.body.addEventListener('click', handleOutsideClick)
    }, []); // не указали  зависимостей значит при первом событии это выполнится

//    console.log(sortRef.current)

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)){          // НЕ был ли произведен клик по области sortRef
            setVisiblePopup(false)      // если клик произошел вне области блока Popup, то блок автоматически скрывается
        }
    }

    const onSelectItem = (index) => {
        setActiveItem(index);
        setVisiblePopup(false);
    };
    
    return (
        <div ref={sortRef
            // (ref) => { -------------- в sortRef будет храниться ссылка на этот блок
            // sortRef.current = ref
        } 
        className="sort">
        <div className="sort__label">
          <svg
          className={visiblePopup ? 'rotated' : ''}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={toggleVisiblePopup}>{activeLabel}</span>
        </div>
       { visiblePopup && (<div className="sort__popup"> 
       {/* ДВА амперсанта = если true то правая часть(сорт__попап) должна отобразиться */}
          <ul>
          {items &&
                    items.map((name, index) => (
                    <li className={activeItem === index ? 'active' : ''} 
                    onClick={() => onSelectItem(index)}
                     key={`${name}_${index}`}>
                        {name}
                    </li>))
                }
          </ul>
        </div>)}
      </div>
    )
}

export default SortPopup
