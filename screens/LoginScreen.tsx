import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import {View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet,StatusBar,Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import HomeScreen from './HomeScreen';

import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnTINae88f-ZrearIY_fxvDxd1kSI5UwI",
  authDomain: "social-mask.firebaseapp.com",
  databaseURL: "https://social-mask.firebaseio.com",
  projectId: "social-mask",
  storageBucket: "",
  // messagingSenderId: "sender-id",
  // appId: "app-id",
  // measurementId: "G-measurement-id"
};

firebase.initializeApp(firebaseConfig);

export default function LoginScreen({navigation}:any){
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const loginUser = async (email: string, password: string) => {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      navigation.push('Tabs')
    } catch (error) {
      console.log(error)
    }
  }

  return (
   <KeyboardAvoidingView style={styles.background}>
     <View style={styles.container}>
       <Image 
       source={require("../assets/images/logo1.png")}
       />
       
     </View>

     <View>
     <TextInput
     style={styles.input}
     placeholder={"Email"}
     autoCorrect={false}
     onChangeText={(email)=> setEmail(email)}
     />

  <TextInput
     style={styles.input}
     placeholder={"Senha"}
     autoCorrect={false}
     onChangeText={(password)=> setPassword(password)}
     />


     <TouchableOpacity style={styles.btnSubmit}>
       <Text style={styles.submitText}
       onPress={() => loginUser(email, password)} >Acessar</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.btnRegister}>
       <Text style={styles.submitText} onPress={()=>{navigation.push('Cadastro')}}>Criar conta gratuita</Text>
     </TouchableOpacity>
     </View>
   </KeyboardAvoidingView>
  );

  
}  
    




const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  containerLogo:{
    flex: 1,
  
    
    alignItems: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#FFF',
    fontSize:18
  },
  btnRegister:{
    marginTop: 10,
  },
  btnText:{
    color: '#FFF'
  },
  title:{
    color: 'white',
    paddingRight:238,
    paddingBottom:20,
    fontSize: 30,
    fontWeight: 'bold'
}
});

