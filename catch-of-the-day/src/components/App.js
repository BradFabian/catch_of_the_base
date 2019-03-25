import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
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

    this.setState({
      fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  //Add Function To Order//
  addToOrder = key => {
    // Take a copy of state
    const order = { ...this.state.order };
    // Either add to the order or update the number in our order
    order[key] = order[key] + 1 || 1;
    //Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>

        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
