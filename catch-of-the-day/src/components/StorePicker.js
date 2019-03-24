import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    //Stop form from submitting//
    event.preventDefault();
    //Get the text from input//
    const storeName = this.myInput.current.value;
    //change the page to /store/whatevertheyentered//
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>PLEASE ENTER A STORE</h2>
        <input
          type="type"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store &rarr;</button>
      </form>
    );
  }
}

export default StorePicker;
