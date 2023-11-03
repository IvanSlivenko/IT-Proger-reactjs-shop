import React, { useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.choiceOrders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.choiceOrders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} OrderItem={el} />
      ))}
      <p className="summa">
        Сума: {new Intl.NumberFormat().format(summa)} грн.
      </p>
    </div>
  );
  
}

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товари відсутні</h2>
    </div>
  );
  
 }

export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false);
    return (
      <header>
        <div>
          <span className="logo"> House Staff</span>
          <ul className="nav">
            <li>Про нас </li>
            <li>Контакти </li>
            <li>Кабінет </li>
          </ul>
          <FaShoppingCart
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`shop-cart-button ${cartOpen && "active"}`}
          />
          {cartOpen && (<div className="shop-cart">
            
            {props.choiceOrders.length > 0 ?
              showOrders(props) 
              : 
              showNothing()
            }
            
            
            
          </div>
          )}
        </div>
        <div className="presentation"></div>
      </header>
    );
}

// {props.choiceOrders.map(el => ( 
//               <Order key={el.id} OrderItem={el} />
//           ))}