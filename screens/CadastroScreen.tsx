import * as React from 'react';
import { StyleSheet,TextInput,TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CadastroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

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
      style={styles.botao}
      onPress={ () => {} }
     >
       <Text style={styles.botaoText}>Cadastre-se</Text>
     </TouchableOpacity>
    
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor:'white',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    opacity: 5


  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: 'white'
    

  },

});

