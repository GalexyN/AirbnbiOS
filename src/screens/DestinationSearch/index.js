import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

const DestinationSearchScreen = () => {
  return (
    <View>
      {/* Input Component */}
      <TextInput
        style={styles.textInput}
        placeholder="
        Where are you going?"
      />
      {/* List of Destinations Component */}
    </View>
  );
};

export default DestinationSearchScreen;
// Input Component
// List of Destinations Component
