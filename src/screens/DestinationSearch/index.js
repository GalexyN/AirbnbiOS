import React, {useState} from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';

import styles from './styles';

import searchData from '../../../assets/search';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      {/* Input Component */}
      <TextInput
        style={styles.textInput}
        placeholder="
        Where are you going?"
        value={inputText}
        onChange={setInputText}
      />
      {/* List of Destinations Component */}
      <FlatList
        data={searchData}
        renderItem={({item}) => <Text>{item.description}</Text>}
      />
    </View>
  );
};

export default DestinationSearchScreen;
