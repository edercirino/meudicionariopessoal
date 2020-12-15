import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../style/Colors';

const TotalWords = () => {
  return (
    <View>
      <Text style={styles.totalWords}>Total de palavras: 10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  totalWords: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.white,
  },
});

export default TotalWords;
