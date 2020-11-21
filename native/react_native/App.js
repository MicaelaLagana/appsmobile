import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';


export default class App extends Component {
  options = {
    url: 'https://cat-fact.herokuapp.com/facts'
  };

  state = {
    fact: "",
    apiConsumed: false,
    txt: "",
    name: "",
    phrase: ""
  };

  constructor(props){
  super(props);
  this.handlerButton = this.handlerButton.bind(this);
  this.handlerText = this.handlerText.bind(this);
  this.getFact = this.getFact.bind(this);
  this.getRandomInt = this.getRandomInt.bind(this);
};
  
  getFact(){
    return new Promise((resolve, reject) =>{
      fetch(options.url).then(rta => {
          resolve(rta.json())
      });
    });
  }
  
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  handlerButton(){
    console.log("why isnt this workiiiiiiing");
    console.log(this.state.txt);
    var random = this.getRandomInt(0, 285);
    console.log(random);
    this.setState({ isConsumed: true }); 
    this.getFact().then(f => {
      console.log(f);
      console.log(f.all[random]);
      this.setState({ fact: f.all[random].text });
    }).catch(() => {
      reject();
      this.setState({ fact: "No fact for u, sowwy u^u" });
    })
  }

  handlerText(text){
    console.log("escribieron: " + text);
    this.setState({txt: text});
    console.log(this.state.txt);
    this.setState({phrase: "did u know, " + text});
  }


  render(){
   return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          {"Hewwo, friend!"}
        </Text>
        <Text style={styles.normalText}>
          {"press the - uwu - button to"}
          {"\n"}
          {"get an unnecesary but super interesting animal fact"}
          {"\n"}
          {"but friend must tell name first!"}
          {"\n"}
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 200}}
          onChangeText={text => this.handlerText(text)}
        />
        <Button
          onPress={this.handlerButton}
          title="uwu"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />      
         <Text style={this.factText}>
            {"\n"}
            {this.state.phrase}
            {"\n"}
            {"\n"}
            {this.state.fact}
            {"\n"}
        </Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold"
  },
  normalText: {
    fontSize: 10,
    fontWeight: "bold",
    justifyContent: 'center',
  },
  normalText: {
    fontSize: 15,
    fontWeight: "bold",
    justifyContent: 'center',
  },
  factText: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: 'center',
  },
});
