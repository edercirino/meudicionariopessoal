import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import WordListItem from '../WordList/WordListItem';

import Colors from '../../style/Colors';

//Vai vir do BD Futuramente
const data = [
  {id: '0', word: 'Periondotia'},
  {id: '1', word: 'Samaritano'},
  {id: '2', word: 'Hipocondríaco'},
  {id: '3', word: 'Efêmero'},
  {id: '4', word: 'Estalaquitite'},
  {id: '5', word: 'Efeminado'},
  {id: '6', word: 'Alérgico'},
  {id: '7', word: 'Cow'},
  {id: '8', word: 'Ox'},
  {id: '9', word: 'Barefoot'},
];

const WordList = () => {
  const renderItem = ({item}) => <WordListItem word={item.word} />;

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity style={styles.addWordButton}>
        <Text style={styles.addWordText}>Adicionar Palavra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addWordButton: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: Colors.green,
    elevation: 10,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 50,
  },
  addWordText: {
    fontSize: 18,
    color: Colors.black,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default WordList;
