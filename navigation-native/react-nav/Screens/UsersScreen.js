import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, TextInput, Button, View, Text, FlatList, SafeAreaView, Image} from 'react-native';

const axios = require('axios');

export class UsersScreen extends Component {
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
          user: items[this.getRandomInt(0, items.length)].user
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
    const { user } = this.state;
    console.log(user);

    return(
      <>
        <View style={styles.container}>
          <Image source={require('../img/user.png')} style={styles.mainImage}/>  
          <SafeAreaView style={styles.container}>
          <Text>
          {"Obtener un colaborador random que \naporta con algunos de datos los datos de animales \n"}
          </Text>
          <Button
            onPress={this.getFact}
            title="Obtener Autor"
            color="#FFC0CB"
            accessibilityLabel="Obtener Autor"
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
              {`${user ? 'Autor: ' + user.name.first + ' ' + user.name.last : ''}`}
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
      width: 200,
      height: 200,
    },
        mainImage:{
      width: 200,
      height: 200,
    },
    text:{
      color: "black",
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
    }
  });