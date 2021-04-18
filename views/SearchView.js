import React from 'react';
import {Button, View, Text} from 'react-native';

import styles from './styles/SearchView.styles';

const SearchView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"Search View Initial Page"</Text>
      <Button
        title="Go to detail view"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
export default SearchView;
