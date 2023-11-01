import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Items from "./components/items";


class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: "товар 1",
          img: "img-1",
          desc: "описа товару 1",
          price: "49,99",
        },
        {
          id: 2,
          title: "товар 2",
          img: "img-2",
          desc: "описа товару 2",
          price: "149,99",
        },
        {
          id: 3,
          title: "товар 3",
          img: "img-3",
          desc: "описа товару 3",
          price: "549,99",
        },
        {
          id: 4,
          title: "товар 4",
          img: "img-4",
          desc: "описа товару 4",
          price: "1549,99",
        },
        {
          id: 5,
          title: "товар 5",
          img: "img-5",
          desc: "описа товару 5",
          price: "2549,99",
        }
      ],
    };
  }
  render() { 
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} />
      <Footer />
    </div>
    )
  }
}

export default App;

 
