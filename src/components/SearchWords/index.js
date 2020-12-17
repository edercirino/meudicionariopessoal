import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../style/Colors';

const SearchWords = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.wordSearch} />
      <TouchableOpacity style={styles.searchButton}>
        <Icon name="search" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  wordSearch: {
    backgroundColor: Colors.white,
    borderRadius: 150,
    width: '65%',
    marginTop: 35,
    marginLeft: 15,
  },
  searchButton: {
    marginTop: 45,
    paddingLeft: 10,
  },
});

export default SearchWords;
