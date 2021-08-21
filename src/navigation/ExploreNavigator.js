import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DestinationSearchScreen from '../screens/DestinationSearch';

const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResults"
        component={DestinationSearchScreen}
        options={{title: 'Search your destination'}}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
