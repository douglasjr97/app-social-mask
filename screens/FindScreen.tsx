import React, { Component } from 'react';
import { FlatList,SafeAreaView,StyleSheet,Image,Text,ScrollView} from 'react-native';
import {Searchbar, Avatar,Appbar, Button,Banner, Card, Title, Paragraph,Chip } from 'react-native-paper';



export default class PesquisaScreen extends Component {

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
      nome:"Máscara Vasco",
      categoria:"Futebol",
     urlImage:"https://img.elo7.com.br/product/zoom/2EE9192/mascara-de-protecao-vasco-coronavirus.jpg",
     preco:"36,00",
     oferta:"17%"
     },
  ])

render() {
 
  return (
    <>
     <Searchbar
      placeholder="Pesquisar por produto"
      style={styles.pesquisa}
      value={""}
    />
  </>
  );
}
}

const styles = StyleSheet.create({
 pesquisa:{
   fontSize:15,
   paddingTop:20
 }
});
