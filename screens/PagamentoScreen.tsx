import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet,Image, TouchableOpacity, TextInput } from 'react-native';
import { Text, View  } from '../components/Themed';
import { RootStackParamList } from '../types';

export default function PagamentoScreen({
    navigation,
  }: StackScreenProps<RootStackParamList, 'Confirmado'>) {
    
    return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder={"Cep"}
      autoCorrect={false}
      />
      <TextInput
      style={styles.input}
      placeholder={"Rua"}
      autoCorrect={false}
      />
      <TextInput
      style={styles.input}
      placeholder={"Bairro"}
      autoCorrect={false}
      />
      <TextInput
      style={styles.input}
      placeholder={"Cidade"}
      autoCorrect={false}
      />
      <TextInput
      style={styles.input}
      placeholder={"Estado"}
      autoCorrect={false}
      />
      <TouchableOpacity onPress={() => navigation.push('Confirmado')} style={styles.link}>
        <Text style={styles.linkText}>Efetuar Pagamento</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Tabs')} style={styles.link}>
        <Text style={styles.linkText}>Cancelar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  logo: {
  width: 150,
  height: 150,
  borderRadius: 3,
  marginBottom:30
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
  title: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff'
  },
  separator: {
  marginVertical: 30,
  height: 1,
  width: '80%',
  },
  link: {
  backgroundColor: '#35AAFF',
   height: 45,
   width: 300,
   marginTop: 10,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 4
  },
  linkText: {
  color: '#FFF',
  fontSize:18,
  borderRadius: 5
  },
  });
  


