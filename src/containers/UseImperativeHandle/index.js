import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

const UseImperativeHandle = () => {
  return (
    <View style={styles.container}>
      <Text>UseImperativeHandle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default UseImperativeHandle;
