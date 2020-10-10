import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet,StatusBar,Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import HomeScreen from './HomeScreen';

export default function LoginScreen({navigation}:any){

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
     onChangeText={()=> {}}
     />

  <TextInput
     style={styles.input}
     placeholder={"Senha"}
     autoCorrect={false}
     onChangeText={()=> {}}
     />


     <TouchableOpacity style={styles.btnSubmit}>
       <Text style={styles.submitText}
       onPress={()=>{navigation.push('Tabs')}} >Acessar</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.btnRegister}>
       <Text style={styles.submitText}>Criar conta gratuita</Text>
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

