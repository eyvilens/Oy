import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circle from "./Circle";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Circle username="mapaz"/>
        <Circle username="reut"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
