import React from 'react';

class Counter extends React.Component {
  state = { value: 0 }

  lightColors = ["White", "Yellow", "Violet"]

  setFontColor = () => {
    return this.lightColors.includes(this.props.name) ? "Black" : "White"
  }

  inc = () => {
    this.setState( state => {
      return { value: state.value + 1 }
    });
  }

  dec = () => {
    this.setState( state => {
      return { value: state.value - 1 }
    });
  }


  render() {
    return (
      <div style={{ backgroundColor: this.props.name, color: this.setFontColor() }}>
        <p>{this.props.name} counter</p>
        <p>{this.state.value}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter;