import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  RefreshControl
} from 'react-native';
import MainPage from './components/mainpage';
import Register from './components/register';
import Form from './components/form';
import SignTest from './components/SignTest'
import { StackNavigator } from 'react-navigation';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fullName: '',
      password: ''
    }
  }

  static navigationOptions = {
    title: 'Home'
  };

  login() {
    this.props.navigation.navigate('MainPage');
  }
  register() {
    this.props.navigation.navigate('Register');
  }

  sign() {
    this.props.navigation.navigate('SignTest');
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>Welcome to EasyForm!</Text>
        <TextInput
          style={{height: 40, width: 400, borderColor: 'white', borderWidth: 0.5, textAlign: 'center', margin: 10}}
          placeholder="Full Name"
          onChangeText={(text) => this.setState({fullName: text})}
          value={this.state.fullName}
        />
        <TextInput
          style={{height: 40, width: 400, borderColor: 'white', borderWidth: 0.25, textAlign: 'center', margin: 10}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
          value={this.state.password}
        />
        <TouchableOpacity onPress={ () => {this.login()} } style={[styles.button, styles.buttonGreen]}>
          <Text style={styles.buttonLabel}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
          <Text style={styles.buttonLabel}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.sign()} }>
          <Text style={styles.buttonLabel}>Sign Test</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: Home,
  },
  MainPage: {
    screen: MainPage,
  },
  Register: {
    screen: Register,
  },
  Form: {
    screen: Form
  },
  SignTest: {
    screen: SignTest
  },
}, {initialRouteName: 'Home'});

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
