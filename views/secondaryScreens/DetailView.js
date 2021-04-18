import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles/DetailView.styles';

const DetailView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"Hi! I am the detail view!"</Text>
    </View>
  );
};

export default DetailView;
