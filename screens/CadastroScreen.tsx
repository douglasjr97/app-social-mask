import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image,TextInput,TouchableOpacity } from 'react-native';
import firebase from './LoginScreen';
import { Text, View } from '../components/Themed';


export default function CadastroScreen({navigation}:any) {
  return (
    
    <KeyboardAvoidingView style={styles.container}>
      <View>
       <Image 
       source={require("../assets/images/logo2.png")} style={styles.logo}/>
     </View>

      <TextInput
     style={styles.input}
     placeholder='Primeiro Nome'
      
      />
    
      <TextInput
      style={styles.input}
      placeholder='Sobrenome'
      
      />
    
      <TextInput
      style={styles.input}
      placeholder='E-mail'
      
      />

      <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder='Senha'
      
      /> 
    
      <TextInput
      style={styles.input}
      placeholder='Data de Nascimento'
      
      />
    
      <TextInput
      style={styles.input}
      placeholder='Endereço'
      
      />

     <TouchableOpacity
      style={styles.btnSubmit}
      onPress={ () => {} }
     >
       <Text style={styles.submitText}  onPress={()=>{navigation.push('Tabs')}} >Cadastre-se</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={styles.btnRegister}>
       <Text style={styles.submitText}  onPress={()=>{navigation.push('Root')}}>Fazer login</Text>
     </TouchableOpacity>
    
     </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 3,
    marginBottom:30
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  input:{
    backgroundColor: '#FFF',
    color: '#222',
    marginTop: 10,
    width:300,
    fontSize: 17,
    borderRadius: 3,
    padding: 10
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    height: 45,
    width:300,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  submitText:{
    color: '#FFF',
    fontSize:18,
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

  },

});

