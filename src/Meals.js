import React, { Component } from 'react';


class Meals extends Component {

  getBurgers(n) {
    if(n === 0){
      return (
        <span>&nbsp;</span>
      );
    }
    if(n > 5){
      return (
        <span>
          <span className="icon">
            <i className="fas fa-hamburger"></i>
          </span>
          &nbsp;&times;&nbsp;{n}
        </span>
      );
    }
    let meals = [];
    for(let i=0; i<n; i++){
      meals.push(
        <span key={i} className="icon">
          <i className="fas fa-hamburger"></i>
        </span>
      );
    }
    return meals;
  }

  render() {
    return (
      <span>{this.getBurgers(this.props.n)}</span>
    );
  }

}

export default Meals;