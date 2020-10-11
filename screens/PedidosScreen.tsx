import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function PedidosScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Confirmado'>) {
  return (
    <View style={styles.container}>
         <View>
        <Image 
        source={require("../assets/images/logo1.png")} style={styles.logo}/>
      </View>
      <TouchableOpacity onPress={() => navigation.push('Pagamento')} style={styles.link}>
        <Text style={styles.linkText}>Continuar com o Pagamento</Text>
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
