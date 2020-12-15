import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../style/Colors';

const TotalWordsLabel = () => {
  return (
    <View>
      <Text style={styles.label}>Meu Dicionário Pessoal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    fontSize: 25,
    color: Colors.white,
    paddingTop: 20,
  },
});

export default TotalWordsLabel;
