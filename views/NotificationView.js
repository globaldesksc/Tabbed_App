import React from 'react';
import {Button, View, Text} from 'react-native';

import styles from './styles/NotificationView.styles';

const NotificationView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification View Initial Page</Text>
      <Button
        title="Go to detail view"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default NotificationView;
