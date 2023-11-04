import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
// import test from "../public/img/21066_6686646.jpg";
// import test from "../public/img/nut-tree-07-1000x1000.jpg";
// import test from "../public/img/oxford.jpg";
// import test from "../public/img/BanerFurniture.jpg";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "товар 1",
          img: "21066_6686646.jpg",
          desc: "описа товару 1",
          category: "sofa",
          price: "49,99",
        },
        {
          id: 2,
          title: "товар 2",
          img: "nut-tree-07-1000x1000.jpg",
          desc: "описа товару 2",
          category: "tables",
          price: "149,99",
        },
        {
          id: 3,
          title: "товар 3",
          img: "oxford.jpg",
          desc: "описа товару 3",
          category: "chairs",
          price: "549,99",
        },
        {
          id: 4,
          title: "товар 4",
          img: "BanerFurniture.jpg",
          desc: "описа товару 4",
          category: "chests",
          price: "1549,99",
        },
        {
          id: 5,
          title: "товар 5",
          img: "shafa_loft_2dg.jpg",
          desc: "описа товару 5",
          category: "closet",
          price: "2549,99",
        },
        {
          id: 6,
          title: "товар 6",
          img: "comod.jpg",
          desc: "описа товару 6",
          category: "chests",
          price: "1800,99",
        },
      ],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header choiceOrders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) { 
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem}) 
  }

  chooseCategory(category) { 
  
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
     }

  this.setState({
    currentItems:this.state.items.filter(el=>el.category===category)
  })
}

  deleteOrder(id) { 
    this.setState({orders: this.state.orders.filter(el=>el.id !== id)})
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

 
