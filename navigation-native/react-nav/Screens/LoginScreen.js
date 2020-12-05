
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, SafeAreaView} from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component{

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){

        try {
            const result = await Google.logInAsync({
                androidClientId: "687972065017-g35cbut6r888g2bt49uq5vvooj4csn78.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                <Image source={require('../img/uwu.png')} style={styles.mainImage}/>
                </SafeAreaView>
                <SafeAreaView style={styles.container}>
                <Button
                    onPress={() => this._signInWithGoogle()}
                    title="Iniciar sesión con Google"
                    color="#FFC0CB"
                />
                </SafeAreaView>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainImage:{
        width: 209 ,
        height: 241,
      }
});

