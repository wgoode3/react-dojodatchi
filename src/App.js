import React, { Component } from 'react';
import Meals from './Meals';
import Dojodatchi from './Dojodatchi';
import './dojodatchi.css';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      dojodatchi : new Dojodatchi()
    };
  }

  activity = (thing) => {
    let dj = this.state.dojodatchi[thing]();
    this.setState({dojodatchi: dj});
  }

  reset = (e) => {
    e.preventDefault();
    this.setState({dojodatchi: new Dojodatchi()});
  }

  render() {
    return (
      <div className="container">

        <div className="card">
          
          <header className="card-header">
            <p className="card-header-title">
              Dojodatchi
            </p>
            <a href="#!" className="card-header-icon" onClick={this.reset}>
              <span className="icon">
                <i className="fas fa-undo"></i>
              </span>
            </a>
          </header>
          
          <div className="columns card-content">
            <div className="column">
              <p>
                Fullness:
                <progress 
                  className="progress is-danger" 
                  value={this.state.dojodatchi.fullness} 
                  max="100"
                >
                </progress>
              </p>
            </div>
            <div className="column">
              <p>
                Energy:
                <progress 
                  className="progress is-link" 
                  value={this.state.dojodatchi.energy} 
                  max="100"
                >
                </progress>
              </p>
            </div>
            <div className="column">
              <p>
                Happiness:
                <progress 
                  className="progress is-primary" 
                  value={this.state.dojodatchi.happiness} 
                  max="100"
                >
                </progress>
              </p>
            </div>
            <div className="column">
              <p>
                Meals:
                <br />
                <Meals n={this.state.dojodatchi.meals} />
              </p>
            </div>
          </div>

          <div className="image">
            <img 
              src={"img/" + this.state.dojodatchi.image} 
              alt="Inubashiri Momiji" 
            />
            <p>{this.state.dojodatchi.message}</p>
          </div>

          <div className="columns card-content">  
            <button 
              className="column button is-medium is-danger"
              onClick={this.activity.bind(this, "feed")}
            >
              <span className="icon">
                <i className="fas fa-hamburger"></i>
              </span>
            </button>
            <button 
              className="column button is-medium is-link"
              onClick={this.activity.bind(this, "sleep")}
            >
              <span className="icon">
                <i className="fas fa-bed"></i>
              </span>
            </button>
            <button 
              className="column button is-medium is-primary"
              onClick={this.activity.bind(this, "play")}
            >
              <span className="icon">
                <i className="fas fa-dice"></i>
              </span>
            </button>
            <button 
              className="column button is-medium is-warning"
              onClick={this.activity.bind(this, "work")}
            >
              <span className="icon">
                <i className="fas fa-briefcase"></i>
              </span>
            </button>
          </div>

        </div>
      </div>
    );
  }
  
}

export default App;