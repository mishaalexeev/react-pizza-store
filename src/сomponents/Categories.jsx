import React from "react";


// class Categories extends React.Component {
//     state = {
//         activeItem: 3,
//         test: 123,
//     };

//     onSelectItem = index => {
//         this.setState ({ //  конкретинация
//             activeItem: index,
//         }); // обновляет состояние, в ней лежит объект
//       //  this.forceUpdate();
//     }

//     render() {
//         const {items, onClick} = this.props;
//     return (
//         <div>
//              <div className="categories">
//               <ul>
//                 <li>Все</li>
//                 {
//                     items.map((name, index) => (
//                     <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} 
//                     key={`${name}_${index}`}>
//                         {name}
//                     </li>))
//                 }

//               </ul>
//             </div>
//         </div>
//     );
// }
//}
//
function Categories({items, onClick}) {
    const [activeItem, setActiveItem] = React.useState(null) // UseState из библиотеки реакта

    const onSelectItem = (index) => {
        setActiveItem(index);
    };

    return (
        <div>
             <div className="categories">
              <ul>
                <li className={activeItem === null ? 'active' : ''}  onClick={() => onSelectItem(null)}>Все</li>
                {items &&
                    items.map((name, index) => (
                    <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${name}_${index}`}>
                        {name}
                    </li>))
                }

              </ul>
            </div>
        </div>
    );
}

export default Categories;
