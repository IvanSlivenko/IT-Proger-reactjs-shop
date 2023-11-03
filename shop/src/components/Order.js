import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'



export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.OrderItem.img} />
        <h2>{this.props.OrderItem.title}</h2>
        <b>{this.props.OrderItem.price} грн</b>
        <FaTrash className='delete-icon'/>
      </div>
    );
  }
}

export default Order
