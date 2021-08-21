import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
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
  );
};

export default GuestsScreen;
