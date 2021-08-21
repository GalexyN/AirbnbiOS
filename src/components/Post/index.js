import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      {/* Bed and Bedroom */}
      {/* Type and Description */}
      {/* Old and New Price */}
      {/* Total Price */}
    </View>
  );
};

export default Post;
