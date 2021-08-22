import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import api_key from '../../../api_key';
import styles from './styles';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigator.navigate('Guests');
        }}
        fetchDetails={true}
        styles={{textInput: styles.textInput}}
        query={{
          key: api_key,
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
