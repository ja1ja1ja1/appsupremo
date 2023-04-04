import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Viagens</Text>
      <Image style={estilo.img} source={require('../assets/aviao.jpg')} />
      

      <TouchableOpacity style={estilo.button}  onPress={()=>{props.navigation.navigate('Paris')}}>
        <Text style={estilo.Bttxt}> Paris </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.button}  onPress={()=>{props.navigation.navigate('Riojaneiro')}}>
        <Text style={estilo.Bttxt}> Rio de Janeiro </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.button} onPress={()=>{props.navigation.navigate('Novayork')}}>
        <Text  style={estilo.Bttxt}> Nova York </Text>
      </TouchableOpacity>

    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#87CEFA'
    
  },
  titulo:{
    alingtext: 'center',
    fontSize:40,
    marginBottom: 50
  },
  button:{
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: 'aliceblue',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    marginTop: 30
  },
  img:{
    width: 100,
    height: 100, 
    borderRadius: 5
    
  },
  Bttxt:{
    fontSize:20
  }

});