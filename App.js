import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResults';
import Post from './src/components/Post';

import feed from './assets/feed';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <SearchResultScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
