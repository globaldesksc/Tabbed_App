import React from 'react';
import {Button, View, Text} from 'react-native';

import styles from './styles/ProfileView.styles';

const ProfileView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile View Initial Page</Text>
      <Button
        title="Go to detail view"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default ProfileView;
