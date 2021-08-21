import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import styles from './styles';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={styles.guestContainer}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Adults</Text>
            <Text style={styles.titleSubtext}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(() => Math.max(0, adults - 1))}>
              <Text style={styles.incrementorText}>-</Text>
            </Pressable>
            <Text style={styles.buttonText}>{adults}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(() => adults + 1)}>
              <Text style={styles.incrementorText}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Children</Text>
            <Text style={styles.titleSubtext}>Ages 2 - 12</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => setChildren(() => Math.max(0, children - 1))}>
              <Text style={styles.incrementorText}>-</Text>
            </Pressable>
            <Text style={styles.buttonText}>{children}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setChildren(() => children + 1)}>
              <Text style={styles.incrementorText}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Infants</Text>
            <Text style={styles.titleSubtext}>Under 2</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => setInfants(() => Math.max(0, infants - 1))}>
              <Text style={styles.incrementorText}>-</Text>
            </Pressable>
            <Text style={styles.buttonText}>{infants}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setInfants(() => infants + 1)}>
              <Text style={styles.incrementorText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate('Explore')}
          style={styles.guestSearchButton}>
          <Text style={styles.guestSearchButtonText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
