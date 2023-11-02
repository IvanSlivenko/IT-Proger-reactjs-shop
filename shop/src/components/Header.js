import React, { useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

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
            {props.choiceOrders.map(el => { 
              <Order key={el.id} OrderItem={el} />
            })}
          </div>
          )}
        </div>
        <div className="presentation"></div>
      </header>
    );
}

