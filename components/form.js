import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import DatePicker from 'react-native-datepicker';
import SignatureCapture from 'react-native-signature-capture';
import {StackNavigator} from './mainpage';
import {
  MKTextField,
  MKColor,
  mdl
} from 'react-native-material-kit';

const inputStyles = StyleSheet.create({
  col: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center', // this will prevent TFs from stretching horizontal
    marginLeft: 7, marginRight: 7,
    // backgroundColor: MKColor.Lime,
  },
  textfield: {
    height: 28,  // have to do it on iOS
    marginTop: 32,
  },
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 10,
  },
});

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      hours: '',
      location: '',
      organization: '',
      startdate: new Date(),
      enddate: new Date(),
    }
  }

  static navigationOptions = {
    title: 'Submit form'
  }
// hello
  componentWillMount() {
    AsyncStorage.getItem('user').then(user => this.setState({ name: user }));
    navigator.geolocation.getCurrentPosition(
      (success) => {
        const latitude = success.coords.latitude;
        const longitude = success.coords.longitude;
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyBE__ygg30fHN72gjTjr2kVe9ql0qrAApQ')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              location: responseJson.results[0].formatted_address
            });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      (error) => {

      },
      {}
    )
  }

  submit() {
    alert('name: ' + JSON.stringify(this.state.name)+ ', hours: ' + JSON.stringify(this.state.hours) + ', location: ' + JSON.stringify(this.state.location) +
    ', organization: ' + JSON.stringify(this.state.organization) + ', start date: ' + JSON.stringify(this.state.startdate) + ', enddate: ' + JSON.stringify(this.state.enddate))
  }

  render = () => {
    let Name = MKTextField.textfield()
      .withDefaultValue(this.state.name)
      .withStyle(inputStyles.textfield)
      .withTextInputStyle({flex: 1})
      .withOnEndEditing((e) => this.setState({name: e.nativeEvent.text}))
      .build();


    const Location = MKTextField.textfield()
      .withPlaceholder('Location')
      .withDefaultValue(this.state.location)
      .withStyle(inputStyles.textfield)
      .withTextInputStyle({flex: 1})
      .withOnEndEditing((e) => this.setState({location: e.nativeEvent.text}))
      .build();

    const ServiceHours = MKTextField.textfield()
      .withPlaceholder('Service Hours')
      .withDefaultValue(this.state.hours)
      .withStyle(inputStyles.textfield)
      .withTextInputStyle({flex: 1})
      .withOnEndEditing((e) => this.setState({hours: e.nativeEvent.text}))
      .withKeyboardType('numeric')
      .build();

    const Organization = MKTextField.textfield()
      .withPlaceholder('Organization')
      .withDefaultValue(this.state.organization)
      .withStyle(inputStyles.textfield)
      .withTextInputStyle({flex: 1})
      .withOnEndEditing((e) => this.setState({organization: e.nativeEvent.text}))
      .build();

    return (
      <View style={styles.container}>
        {/* display */}
        <View style={{margin:20}}>
          <Name />
          <ServiceHours />
          <Location />
          <Organization />
        </View>
        <Text>{"\n"}</Text>
        <View style={{flex: 1, alignItems: 'center'}}>
          <DatePicker
          style={{width: 150}}
          date={this.state.startdate}
          mode="date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({startdate: date})}}
        />
          <DatePicker
          style={{width: 150}}
          date={this.state.enddate}
          mode="date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({enddate: date})}}
        />
    </View>
        <TouchableOpacity>
          <Button
            onPress={() => this.submit()}
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
