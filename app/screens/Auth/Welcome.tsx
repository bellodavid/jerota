import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
