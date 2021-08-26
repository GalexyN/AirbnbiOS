import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

const SearchResultsMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default SearchResultsMap;
