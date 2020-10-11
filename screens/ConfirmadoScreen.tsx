import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default function ConfirmadoScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Confirmado'>) {
  return (
    <View style={styles.container}>
         <View>
        <Image 
        source={require("../assets/images/concluido.png")} style={styles.logo}/>
      </View>
      <Text style={styles.title}>Sua compra foi concluída com sucesso.</Text>
      
      <TouchableOpacity onPress={() => navigation.push('Tabs')} style={styles.link}>
        <Text style={styles.linkText}>Clique para voltar aos produtos!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
      },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 3,
    marginBottom:30
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
