import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button } from 'react-native';
import {
  getTheme,
} from 'react-native-material-kit';
const theme = getTheme();

export default class MainPage extends React.Component {
  static navigationOptions = {
    title: 'Completed forms'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={theme.cardStyle}>
          {/*<Image source={{uri : base64Icon}} style={theme.cardImageStyle} />*/}
          {/*Use list view*/}
          <Text style={theme.cardContentStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </Text>
          <Text style={theme.cardActionStyle}>My Action</Text>
        </View>
        <TouchableOpacity>
          <Button
            onPress={() => {this.props.navigation.navigate('Form');}}
            title="Submit"
            color="#841584"
            accessibilityLabel="Submit a form"
          />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});