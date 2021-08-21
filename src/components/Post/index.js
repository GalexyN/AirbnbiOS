import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* Bed and Bedroom */}
      <Text style={styles.bedroom}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      {/* Old and New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
      </Text>
      {/* Total Price */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
