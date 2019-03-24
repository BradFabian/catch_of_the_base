import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    //take a copy of exisiting state
    const fishes = { ...this.state.fishes };
    //add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    console.log("adding a fish!");
    this.setState({
      fishes: fishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
