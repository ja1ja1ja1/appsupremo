import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity,FlatList,ScrollView } from 'react-native';

export default function Paris() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>PARIS</Text>
        <ScrollView>
        <FlatList
          data={arrayAnimal}
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

const arrayAnimal = [
  {
    Lugar: ' Torre Eiffel',
    DtC: '  fim do século XIX',
    Informacao: '  festejou seus 120 anos em 2009.',
    Capa: require('../assets/torre.jpg'),
  },
  {
    Lugar: ' Museu do Louvre',
    DtC: '  10 de agosto de 1793',
    Informacao: '  É o maior museu de arte do mundo.',
    Capa: require('../assets/louvre.jpg'),
  }]
  