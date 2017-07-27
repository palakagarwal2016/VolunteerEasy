import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password'
    }
  }

  static navigationOptions = {
    title: 'Register'
  };

  register() {

  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width: 400, borderColor: 'white', borderWidth: 0.5, textAlign: 'center', margin: 10}}
          placeholder="Username"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={{height: 40, width: 400, borderColor: 'white', borderWidth: 0.25, textAlign: 'center', margin: 10}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity onPress={ () => {this.register()} } style={[styles.button, styles.buttonGreen]}>
          <Text style={styles.buttonLabel}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
  buttonBlue: {
    backgroundColor: '#0074D9',
  },
  buttonGreen: {
    backgroundColor: '#2ECC40'
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
});
