
import React, { Component } from 'react';
import { StyleSheet, ViewPagerAndroidProps } from 'react-native';
import CustomAlertComponent from './CustomAlertComponent';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.onPressAlertPositiveButton = this.onPressAlertPositiveButton.bind(this);
    this.onPressAlertNegativeButton = this.onPressAlertNegativeButton.bind(this);
  }

  onPressAlertPositiveButton = () => {
    alert('Positive Button Clicked');
  };

  onPressAlertNegativeButton = () => {
    alert('Negative Button Clicked');
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomAlertComponent
          displayAlert={true}
          displayAlertIcon={true}
          alertTitleText={'Alert Title from Props'}
          alertMessageText={'Alert message from props'}
          displayPositiveButton={true}
          positiveButtonText={'OK'}
          displayNegativeButton={true}
          negativeButtonText={'CANCEL'}
          onPressPositiveButton={this.onPressAlertPositiveButton}
          onPressNegativeButton={this.onPressAlertNegativeButton}
        />
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
  }
});