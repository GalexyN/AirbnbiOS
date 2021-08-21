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
      <Text style={styles.bedroom}>1 bed 1 bedroom</Text>
      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        Bacon ipsum dolor amet ground round salami corned beef shankle, alcatra
        bacon chicken swine. Meatloaf jowl pork chop hamburger, frankfurter
        short loin turducken ball tip biltong burgdoggen kevin chuck cow
        venison. Sausage flank swine filet mignon chuck rump tongue. Hamburger
        jerky tenderloin alcatra fatback cupim spare ribs meatloaf shoulder
        ground round leberkas landjaeger shankle rump. Andouille pork loin shank
        ball tip chuck prosciutto, doner landjaeger burgdoggen kevin flank strip
        steak.
      </Text>
      {/* Old and New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30 </Text>/ night
      </Text>
      {/* Total Price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
