import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <SearchResultScreen /> */}
        <DestinationSearchScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
