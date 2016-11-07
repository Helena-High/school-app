import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import StudentLifeView from '../views/StudentLifeView';

export default class StudentLifeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: '  Student Life',
	  backgroundColor: '#990033',
	  titleStyle: {fontSize: 25, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }
  render() {
    return (
      <View
        style={styles.container}>
        <StudentLifeView/>
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