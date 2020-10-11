import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function SobreScreen() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
            <Text style={[styles.subText]}>FSociety Membros</Text>
            <View style={{ alignItems: "center" }}>
                <View style={styles.recentItem}>
                          <View>
                            <Image source={require("../assets/images/lucasr1.jpeg")} style={styles.logo}/>
                        </View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            Lucas Rodrigues
                        </Text>
                        <Text style={[styles.subText]}>github.com/lucask32</Text>
                    </View>
                </View></View>

                <View style={{ alignItems: "center" }}>
                <View style={styles.recentItem}>
                          <View>
                            <Image source={require("../assets/images/lucasr2.jpeg")} style={styles.logo}/>
                        </View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            Lucas de Rezende Martins
                        </Text>
                        <Text style={[styles.subText]}>github.com/lucasr3martins</Text>
                    </View>
                </View></View>

                <View style={{ alignItems: "center" }}>
                <View style={styles.recentItem}>
                          <View>
                            <Image source={require("../assets/images/douglas.jpeg")} style={styles.logo}/>
                        </View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            Douglas Falcão
                        </Text>
                        <Text style={[styles.subText]}>github.com/douglasjr97</Text>
                    </View>
                </View></View>

                <View style={{ alignItems: "center" }}>
                <View style={styles.recentItem}>
                          <View>
                            <Image source={require("../assets/images/raian.png")} style={styles.logo}/>
                        </View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            Raian Pierre
                        </Text>
                        <Text style={[styles.subText]}>github.com/raianffc</Text>
                    </View>
                </View></View>

                <View style={{ alignItems: "center" }}>
                <View style={styles.recentItem}>
                          <View>
                            <Image source={require("../assets/images/allan.jpeg")} style={styles.logo}/>
                        </View>
                    <View style={{ width: 250 }}>
                        <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                        Allan Hipólito
                        </Text>
                        <Text style={[styles.subText]}>github.com/allanwalker23</Text>
                    </View>
                </View></View>

      </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
logo: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 100,
    width: 100,
    borderRadius: 100,
    marginLeft: 10,
    marginBottom:30,
    marginTop: 3,
    marginRight: 10,
    
},
recent: {
    fontSize: 10
},
recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
},
subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
},
text: {
    marginTop: 20,
    fontSize: 16,
    color: "#000",
    fontWeight: 'bold',
},
});