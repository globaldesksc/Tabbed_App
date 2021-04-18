import React from 'react';
import {Button, View, Text} from 'react-native';

import styles from './styles/SettingsView.styles';

const SettingsView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings View Initial Page</Text>
      <Button
        title="Go to detail view"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default SettingsView;
