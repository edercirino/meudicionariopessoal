import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../../style/Colors';

const SearchWordLabel = () => {
  return (
    <View>
      <Text style={styles.searchWordLabel}>Suas Palavras Preferidas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchWordLabel: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
    paddingTop: 50,
  },
});

export default SearchWordLabel;
