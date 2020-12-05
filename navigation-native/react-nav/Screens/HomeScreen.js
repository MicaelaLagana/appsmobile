import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, TextInput, Button, View, Text, FlatList, SafeAreaView, Image} from 'react-native';

const axios = require('axios');

export class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
    };

    this.getFact = this.getFact.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
  }
  
  getFact(){
    axios.get("https://cat-fact.herokuapp.com/facts")
      .then(response=>{
        const items = response.data.all;
        this.setState({
          consulteApi: true,
          items,
          dato: items[this.getRandomInt(0, items.length)].text
        });
      })
      .catch(error=>{
        console.log(error);
      });
  }
  
  handlerButton() {
    const { items } = this.state;

    if (items.length) {
      this.setState({
        dato: items[this.getRandomInt(0, items.length)]
      });
    } else {
      this.getFact();
    }
  }

  handlerLogout=()=>{
    console.log("Logouthome");
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render(){
    //Destructuracion del objeto, asi lo puedo usar sin poner el this.state
    const { dato } = this.state;

    return(
      <>
        <View style={styles.container}>
          <Image source={require('../img/home.png')} style={styles.mainImage}/>  
          <SafeAreaView style={styles.container}>

          <Button
            onPress={this.getFact}
            title="Obtener dato"
            color="#FFC0CB"
            accessibilityLabel="Obtener Dato"
          />
          </SafeAreaView>
        </View>
        
        <SafeAreaView style={styles.container}>
          {
            //Si tengo dato, muestro, sino no
            <Text style={styles.text}>
              {/* Las llaves son para meter codigo en html, las tildes
              son para poner codigo dentro de strings, pero primero tiene que ir
              el $ */}
              {`${dato ? 'Dato: ' + dato : ''}`}
            </Text>
          }
        </SafeAreaView>
      </>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `#f0f8ff`,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 400,
      height: 400,
    },
        mainImage:{
      width: 318,
      height: 159,
    },
    text:{
      color: "black",
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
    }
  });