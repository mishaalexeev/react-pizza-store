
// классовый компонент
// в реакте есть state и props 
import React from 'react'; 
import classNames from 'classnames'; //


function Button(props) { // все параметры которые мы передаем сюда будут хранится в props
    return (<button className={classNames(
         'button',{
        'button--outline': props.outline,
         } )}>{props.children}
         </button>
         );
}

// class Button extends React.Component {
//     componentDidMount(){
//         console.log('aaa');
//     }

//     render(){

//         return <button className={classNames(
//             'button',{
//             'button--outline': this.props.outline,
//             } )}>{this.props.children}</button>; // ФИГУРНЫЕ СКОБКИ - в HTML код JS // this - обращение к классу, у класса есть пропс, у пропса есть св-во текст
//         // в косых ковычках можно писать логику, сейчас в них записано условие
//     }

// }



export default Button;