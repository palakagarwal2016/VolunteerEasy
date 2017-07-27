import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dis is da main page yo</Text>
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
