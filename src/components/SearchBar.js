import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar({ term, onSearch, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome
        name="search"
        size={24}
        color="black"
        style={styles.iconStyle}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={(value) => onSearch(value)}
        onEndEditing={() => onTermSubmit()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
