import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {saveWord} from '../../services/Words';

import Colors from '../../style/Colors';

const NewWord = ({navigation}) => {
  const [word, setWord] = useState('');
  const [description, setDescription] = useState('');

  const save = () => {
    const values = {
      word: word,
      description: description,
    };

    console.log('NewWord :: save ', values);
    saveWord(values);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Adicionar Palavra</Text>
      <TextInput
        style={styles.word}
        onChangeText={(textWord) => setWord(textWord)}
        value={word}
        placeholder="Palavra"
      />

      <TextInput
        style={styles.wordDescription}
        multiline={true}
        onChangeText={(desc) => setDescription(desc)}
        value={description}
        placeholder="Descrição da palavra"
      />

      <View style={styles.actionButtons}>
        <Icon
          name="arrow-back"
          size={30}
          color="#fff"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Icon name="save" size={30} color="#fff" onPress={save} />
        <Icon name="delete" size={30} color="#EA2027" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
    color: Colors.white,
    paddingTop: 20,
  },
  word: {
    backgroundColor: Colors.white,
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 5,
    marginTop: 50,
  },
  wordDescription: {
    backgroundColor: Colors.white,
    fontSize: 18,
    height: 100,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 5,
    marginTop: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 40,
  },
});

export default NewWord;
