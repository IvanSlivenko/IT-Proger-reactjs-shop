import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Items from "./components/items";
// import test from "../public/img/21066_6686646.jpg";
// import test from "../public/img/nut-tree-07-1000x1000.jpg";
// import test from "../public/img/oxford.jpg";
// import test from "../public/img/BanerFurniture.jpg";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "товар 1",
          img: "21066_6686646.jpg",
          desc: "описа товару 1",
          price: "49,99",
        },
        {
          id: 2,
          title: "товар 2",
          img: "nut-tree-07-1000x1000.jpg",
          desc: "описа товару 2",
          price: "149,99",
        },
        {
          id: 3,
          title: "товар 3",
          img: "oxford.jpg",
          desc: "описа товару 3",
          price: "549,99",
        },
        {
          id: 4,
          title: "товар 4",
          img: "BanerFurniture.jpg",
          desc: "описа товару 4",
          price: "1549,99",
        },
        {
          id: 5,
          title: "товар 5",
          img: "shafa_loft_2dg.jpg",
          desc: "описа товару 5",
          price: "2549,99",
        },
        {
          id: 6,
          title: "товар 6",
          img: "comod.jpg",
          desc: "описа товару 6",
          price: "1800,99",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header choiceOrders={this.state.orders } />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => { 
      if (el.id === item.id)
        isInArray = true
    })

    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] });
    
    
  }
}
export default App;

 
