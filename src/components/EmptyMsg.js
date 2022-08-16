import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';

const EmptyMsg = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.simpleText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  simpleText: {
    fontSize: 19,
    color: globalStyles.green,
  },
});
export default EmptyMsg;
