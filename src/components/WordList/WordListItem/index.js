import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../style/Colors';

const WordListItem = ({word}) => {
  return (
    <View>
      <View style={styles.wordList}>
        <Text style={styles.wordItem}>
          <Icon name="fiber-manual-record" size={12} color="#ede" />
          {word}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wordList: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 140,
    padding: 1,
  },
  wordItem: {
    flex: 1,
    fontSize: 18,
    color: Colors.white,
  },
  editButton: {
    paddingRight: 10,
  },
});

export default WordListItem;
