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
      startdate: '',
      enddate: '',
    }
  }

  static navigationOptions = {
    title: 'Submit form'
  }

  componentWillMount() {
    AsyncStorage.getItem('user').then(user => { this.setState({ name: user }); alert(user) });
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
      .withStyle(inputStyles.textfield)
      .withTextInputStyle({flex: 1})
      .withOnEndEditing((e) => this.setState({hours: e.nativeEvent.text}))
      .build();

    const Organization = MKTextField.textfield()
      .withPlaceholder('Organization')
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
          style={{width: 150, display: 'inline'}}
          date={"2016-05-15"}
          mode="date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
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
          style={{width: 150, display: 'inline'}}
          date={"2016-05-15"}
          mode="date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
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
      {/*}<SignatureCapture
          style={{width: 100, height: 100}}
          rotateClockwise={true}
          square={true}
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage={true}
          showNativeButtons={true}
          showTitleLabel={true}
          viewMode={'landscape'}
        /> */}
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
