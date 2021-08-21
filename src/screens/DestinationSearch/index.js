import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = React.useState('');
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
    </View>
  );
};

export default DestinationSearchScreen;
