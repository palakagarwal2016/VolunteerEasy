import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import DatePicker from 'react-native-datepicker';
import SignatureCapture from 'react-native-signature-capture';
import StackNavigator from './mainpage';
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
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 10,
  },
});
const Name = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Name')
  .withStyle(inputStyles.textfieldWithFloatingLabel)
  .withTextInputStyle({flex: 1})
  .withFloatingLabelFont({
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '200',
  })
  .build();

  const Location = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Location')
    .withStyle(inputStyles.textfieldWithFloatingLabel)
    .withTextInputStyle({flex: 1})
    .withFloatingLabelFont({
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: '200',
    })
    .build();

const ServiceHours = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Total hours completed')
  .withStyle(inputStyles.textfieldWithFloatingLabel)
  .withTextInputStyle({flex: 1})
  .withFloatingLabelFont({
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '200',
  })
  .withKeyboardType('numeric')
  .build();

  const Organization = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Organization')
    .withStyle(inputStyles.textfieldWithFloatingLabel)
    .withTextInputStyle({flex: 1})
    .withFloatingLabelFont({
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: '200',
    })
    .build();

export default class Form extends React.Component {
  constructor(){
    super();
    this.state={
      name: '',
      hours: null,
      location: '',
      organization: '',
      startdate: null,
      enddate: null,
    }
  }
  static navigationOptions = {
    title: 'Submit form'
  }

  submit() {
    this.props.navigation.navigate('MainPage');
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <View style={{margin:20}}>
          <Name onNameChange={(text) => {this.setState({name: text})}}/>
          <ServiceHours onServiceChange={(hours) => {this.setState({hours: hours})}}/>
          <Location onLocationChange={(location) => {this.setState({location: location})}}/>
          <Organization onOrgChange={(organization) => {this.setState({organization: organization})}}/>
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
            onPress={() => submit()}
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
