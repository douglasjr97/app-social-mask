import * as React from 'react';
import { StyleSheet,Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View  } from '../components/Themed';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image 
        source={require("../assets/images/logo2.png")} style={styles.logo}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

});
