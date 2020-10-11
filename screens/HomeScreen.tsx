import React, { Component } from 'react';
import { FlatList,SafeAreaView,StyleSheet,Image,Text,ScrollView} from 'react-native';
import { Avatar,Appbar, Button,Banner, Card, Title, Paragraph,Chip } from 'react-native-paper';



export default class HomeScreen extends Component {

  categorias=([

    {
      id:"1",
      nome:"Marcas",
      icone:"apple"
     },
  
    {
      id:"2",
      nome:"Futebol",
      icone:"soccer"
     },
     {
      id:"3",
      nome:"Animes",
      icone:"heart"
     },
     {
      id:"4",
      nome:"Filmes",
      icone:"play"
     },
     {
      id:"5",
      nome:"Coloridas",
      icone:"tag"
     },
     {
      id:"6",
      nome:"Artistas",
      icone:"star"
     },
  ]);
  

  produtos=([

    {
      id:"1",
      nome:"Máscara Flamengo",
      categoria:"Futebol",
     urlImage:"https://static3.tcdn.com.br/img/img_prod/311840/kit_de_3_mascaras_flamengo_preta_e_vermelha_78549_2_20200515153634.jpg",
     preco:"75,00",
     oferta:"15%"
     },
  
    {
      id:"2",
      nome:"Máscara Flamengo 2",
      categoria:"Futebol",
     urlImage:"https://static3.tcdn.com.br/img/img_prod/311840/kit_de_3_mascaras_flamengo_preta_e_vermelha_78549_2_20200515153634.jpg",
     preco:"36,00",
     oferta:"17%"
     },
  ])

render() {
 
  return (
    <>
  <SafeAreaView>
  <ScrollView >
  
  <Card style={styles.Card}>
 
      <Text style={styles.TextoBemVindo}>Olá User</Text>
    </Card>


    <FlatList
          data={this.categorias}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({ item }) => {
            return (
            
              <Chip style={{width:120}} selected={true} icon={item.icone} mode="outlined" onPress={() => console.log('Pressed')}>{item.nome}</Chip>
            );
          }}
        />
    
    <Card style={styles.Card}>
 
      <Text style={styles.TextoInicial}>Produtos</Text>
    </Card>
   
    
    <FlatList
          data={this.produtos}
          keyExtractor={item => item.id}
          
          renderItem={({ item }) => {
            return (
            
              <Card>
              <Card.Title title={item.nome} subtitle={item.categoria} />
              
              <Card.Cover source={{ uri: item.urlImage }} />
              <Card.Content style={{flexDirection:'row'}}>
              <Text style={styles.preco}>R${item.preco}</Text>
              <Text style={styles.oferta}>{item.oferta} OFF</Text>
              
              </Card.Content>
              <Text style={styles.juros}>12X R${parseInt(item.preco)/12} sem juros</Text>
              <Card.Actions>
              <Button>Ver mais</Button>
                
              </Card.Actions>
            </Card>
            );
          }}
        />

  </ScrollView>
  </SafeAreaView>
  </>
  );
}
}

const styles = StyleSheet.create({
 Card:{
   paddingTop:10,
 },
 TextoInicial:{
   
   fontSize:30,
   margin:10
 },
 TextoBemVindo:{
   fontSize:30,
   margin:10
 },
 preco:{
   fontSize:30,
   width:250,
 },
 oferta:{
   color:"green",
    fontSize:20
 },
 juros:{
   color:"green",
   fontSize:20,
   marginLeft:15
 }

});
