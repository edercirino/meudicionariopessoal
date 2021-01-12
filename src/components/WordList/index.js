import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import WordListItem from '../WordList/WordListItem';

import {getWords} from '../../services/Words';

import Colors from '../../style/Colors';

const WordList = ({navigation}) => {
  const renderItem = ({item}) => <WordListItem word={item.word} />;
  const [words, setWords] = useState([]);

  useEffect(() => {
    async function loadWords() {
      const data = await getWords();
      setWords(data);
    }

    loadWords();

    console.log('WordList :: useEffect');
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={words}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity
        style={styles.NewWordButton}
        onPress={() => navigation.navigate('NewWord')}>
        <Text style={styles.NewWordText}>Adicionar Palavra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NewWordButton: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: Colors.green,
    elevation: 10,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 50,
  },
  NewWordText: {
    fontSize: 18,
    color: Colors.black,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default WordList;
