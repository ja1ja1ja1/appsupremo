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
              <Image style={styles.img} source={item.Capa} />
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
    Lugar: ' Central Park',
    DtC: '   inaugurado em 1857',
    Informacao: '   Aproximadamente 42 milhões de visitantes anualmente.',
    Capa: require('../assets/centralpark.jpg')
  },
  {
    Lugar: ' Empire State Building',
    DtC: '  11 de abril de 1931',
    Informacao: '   Um arranha-céu de 102 andares no centro de Manhattan.',
    Capa: require('../assets/empire.jpg'),
  }]