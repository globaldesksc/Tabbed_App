import React from 'react';
import {Button, View, Text} from 'react-native';

import styles from './styles/HomeView.styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App =)</Text>
      <Button
        title="Go to detail view"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
