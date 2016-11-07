import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import ParentStudentInfoView from '../views/ParentStudentInfoView';



export default class ParentStudentInfoScreen extends React.Component {
  static route = {
    navigationBar: {
      title: '  Parent & Student Info',
	  backgroundColor: '#990033',
	  titleStyle: {fontSize: 18, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }
  render() {
    return (
      <View
        style={styles.container}>
        <ParentStudentInfoView/>
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