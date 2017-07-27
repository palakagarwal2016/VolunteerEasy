import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import DatePicker from 'react-native-datepicker';
import SignatureCapture from 'react-native-signature-capture';

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

  const PhoneNumber = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Phone number')
    .withStyle(inputStyles.textfieldWithFloatingLabel)
    .withTextInputStyle({flex: 1})
    .withFloatingLabelFont({
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: '200',
    })
    .withKeyboardType('numeric')
    .build();

export default class Form extends React.Component {
  static navigationOptions = {
    title: 'Submit form'
  }

  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    alert('save');
  }

  _onDragEvent(evt) {
    alert('hi');
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}

        <Name/>
        <ServiceHours/>
        <PhoneNumber/>
        <Text>{"\n"}</Text>
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
        onDateChange={(date) => {this.setState({date: date})}}
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
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <SignatureCapture
          style={{width: 100, height: 100}}
          rotateClockwise={true}
          square={true}
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage={true}
          showNativeButtons={true}
          showTitleLabel={true}
          viewMode={'landscape'}
        />
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
