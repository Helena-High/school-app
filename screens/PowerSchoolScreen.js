import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PowerSchoolView from '../views/PowerSchoolView';

export default class PowerSchoolScreen extends React.Component {
  static route = {
    navigationBar: {
      title: '  PowerSchool',
	  backgroundColor: '#990033',
	  titleStyle: {fontSize: 25, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }

  render() {
    return (
      <View
        style={styles.container}>
        <PowerSchoolView/>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#990033',
  },
});
