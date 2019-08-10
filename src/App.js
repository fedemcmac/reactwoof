import React, { Component } from "react";
import "./App.css";
import Bar from "./components/Bar";
import DogCard from "./components/DogCard";

export default class App extends Component {
  state = {
    dogs: [],
    chosenDog: {}
  };

  componentDidMount() {
    fetch("http://localhost:3001/pups")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          dogs: data
        });
      });
  }

  handleClick = event => {
    fetch(`http://localhost:3001/pups/${event.target.id}`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          chosenDog: data
        })
      );
  };

  handleDogButton = event => {
    const dogData = {
      isGoodDog: !this.state.chosenDog.isGoodDog
    };

    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dogData)
    };

    fetch(`http://localhost:3001/pups/${event.target.id}`, configObj)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          chosenDog: data
        })
      );
  };

  handleFilter = event => {
    if (event.target.innerText === "Filter good dogs: OFF") {
      event.target.innerText = "Filter good dogs: ON";
      const goodDogs = this.state.dogs.filter(dog => dog.isGoodDog === true)
      this.setState({
        dogs: goodDogs
      }) 
    } else { event.target.innerText = "Filter good dogs: OFF" 
    fetch("http://localhost:3001/pups")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        dogs: data
      });
    });}
  };

  render() {
    return (
      <div className="App">
        <div id="filter-div">
          <button onClick={this.handleFilter} id="good-dog-filter">
            Filter good dogs: OFF
          </button>
        </div>
        <Bar dogs={this.state.dogs} handleClick={this.handleClick} />
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <DogCard
            handleDogButton={this.handleDogButton}
            dog={this.state.chosenDog}
          />
        </div>
      </div>
    );
  }
}
