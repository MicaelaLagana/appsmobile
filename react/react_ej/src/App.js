import React from 'react';
import './App.css';

const request = require('request');

const options = {
    url: 'https://cat-fact.herokuapp.com/facts'
};


class App extends React.Component{

  state = {
    fact: "",
    apiConsumed: false
  };

  constructor(props){
  super(props);
  this.handlerClick = this.handlerClick.bind(this);
  this.getFact = this.getFact.bind(this);
};

getFact(){
  return new Promise((resolve, reject) => {
    request(options.url, (error, response) => {
        if (error || response.statusCode !== 200) {
          reject(error);
        } else {
          resolve(JSON.parse(response.body));
        }
     });
  });
}

getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

handlerClick(){
  var random = this.getRandomInt(0, 285);
  console.log(random);
  this.setState({ isConsumed: true }); 
  this.getFact().then(f => {
    console.log(f.all[random]);
    this.setState({ fact: f.all[random].text });
  }).catch(() => {
    this.setState({ fact: "No fact for u, sowwy u^u" });
  })
};

  render(){
      return (
        <div className="App">
          <header className="App-header">
              <h1>React api call excersise</h1>
            <p>This app will tell u an unnecesary but super interesting fact about a random animal</p>
            <a
              className="App-link"
              href="https://alexwohlbruck.github.io/cat-facts/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              API doc
            </a>
            <p></p>
            <button onClick={this.handlerClick}> uwu </button>
            <div>
              <p>
                {this.state.fact}
              </p>
            </div>
          </header>
        </div>
      );
    }
  }

export default App;
