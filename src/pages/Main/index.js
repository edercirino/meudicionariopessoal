import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TotalWordsLabel from '../../components/TotalWords/TotalWordsLabel';
import TotalWords from '../../components/TotalWords';
import SearchWordLabel from '../../components/SearchWords/SearchWordLabel';
import SearchWords from '../../components/SearchWords';
import WordList from '../../components/WordList';

import Colors from '../../style/Colors';

const Main = () => {
  return (
    <View style={styles.container}>
      <TotalWordsLabel />
      <TotalWords />
      <SearchWordLabel />
      <SearchWords />
      <WordList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Main;
