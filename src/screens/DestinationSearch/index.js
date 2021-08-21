import React, {useState} from 'react';
import {View, TextInput, Text, FlatList, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/core';

import styles from './styles';

import searchData from '../../../assets/search';

const DestinationSearchScreen = () => {
  const navigator = useNavigation();

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
          <Pressable
            onPress={() => navigator.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
