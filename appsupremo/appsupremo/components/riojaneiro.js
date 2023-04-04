import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity,FlatList,ScrollView } from 'react-native';

export default function Novayork() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Novayork</Text>
        <ScrollView>
        <FlatList
          data={arrayViagens}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.subTitulo}>{item.Lugar}</Text>
              <Image style={styles.img} source={item.capa} />
              <Text style={styles.subTitulo}>LUGAR:{item.Lugar} </Text>
              <Text style={styles.subTitulo}>DATA DE CRIAÇÃO:{item.DtC} </Text>
              <Text style={styles.subTitulo}>
                INFORMAÇÃO:{item.Informacao}
              </Text>
              <Text>____________________________________________________</Text>
            </View>
          )}
        />
        </ScrollView>
      </View>
    );
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#87CEFA'
  },
  titulo:{
    alingtext: 'center',
    fontSize:30,
    marginBottom: 50
  },
  subTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  img:{
    width: 300,
    height: 400, 
    borderRadius: 5
  }

});

const arrayViagens = [
  {
    Lugar: ' cristo redentor',
    DtC: '   dia 12 de outubro de 1931',
    Informacao: '   Inicialmente o Cristo Redentor empunharia uma Cruz e um globo terrestre.',
    Capa: require('../assets/cristo.jpg'),
  },
  {
    Lugar: ' Maracanã',
    DtC: '  Foi inaugurado em 1950',
    Informacao: '  Na construção do estádio foram gastos 7.730.000 horas de trabalho ininterruptas ',
    Capa: require('../assets/maraca.jpg'),
  }]