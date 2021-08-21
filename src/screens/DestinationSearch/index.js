import React, {useState} from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import searchData from '../../../assets/search';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="
        Where are you going?"
        value={inputText}
        onChange={setInputText}
      />
      <FlatList
        data={searchData}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
