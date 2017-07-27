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

  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    fetch('https://shrouded-tor-50203.herokuapp.com/students')
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        this.setState({
          students: responseJson.students
        });
      } else {
        Alert.alert(
          'Error loading students',
          responseJson.error, // Button
        )
      }
    })
    .catch((err) => {
      console.log('error:', err);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 20}}>
          {/*<Image source={{uri : base64Icon}} style={theme.cardImageStyle} />*/}
          {/*Use list view*/}
          {this.state.students.length !== 0 ?
            this.state.students.map((student) =>
            <View style={theme.cardStyle}>
              <Text style={theme.cardActionStyle}>Amy Wang                  Total: 8 hours</Text>
              <Text style={theme.cardContentStyle}>
                Organizations: bob, bob, bob
              </Text>
            </View>
            )
            : null}
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
