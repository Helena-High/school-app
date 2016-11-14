import React from 'react';
import {
  Linking,
  Navigator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MaterialIcons,
} from '@exponent/vector-icons';
import Router from '../navigation/Router';

const Button = ({title, name}) => {
  return (
	<View style={styles.button}>
	  <MaterialIcons
        name={name}
        size={25}
		color={'#cccccc'}
      />	
	  <Text style={styles.label}>	  
        {title}
      </Text>
	</View>   
  );
};

export default class InfoScreen extends React.Component {
  static route = {
    navigationBar: {
			title: '  Helena High Information',
			backgroundColor: '#990033',
			titleStyle: {fontSize: 20, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }

  render() {
    return (
		<View style={styles.container}>	
		  <View style={styles.mainContainer}>	
			<View style={styles.option}>
				<TouchableOpacity onPress={this._handleStudentLifePress}>
					<Button title={"  Student Life"} name={'local-pizza'}/>
				</TouchableOpacity>	  
			</View>
				
			<View style={styles.option}>	
				<TouchableOpacity onPress={this._handleStudentParentPress}>
					<Button title={"  Parent & Student"} name={'supervisor-account'}/>
				</TouchableOpacity>	 
			</View>
				
			<View style={styles.option}>			
				<TouchableOpacity onPress={this._handleSchoolInfoPress}>
					<Button title={"  School Info"} name={'location-city'}/>
				</TouchableOpacity>	
			</View>
			
			<View style={styles.option}>
				<TouchableOpacity onPress={this._handleScholarshipPress}>
					<Button title={"  Scholarships"} name={'monetization-on'}/>
				</TouchableOpacity>	 
			</View>
				
				<Navigator
					navigator = {this.props.navigator}
					renderScene={this.renderScene.bind(this)}
					initialRoute={{component: this.info}}   />	
		  </View>
		</View>
    );
  } 
  
  renderScene(route, nav) {}

  _handleStudentLifePress = () => { 
		this.props.navigator.push(Router.getRoute('studentlife'))   
  }
  _handleStudentParentPress = () => {
		this.props.navigator.push(Router.getRoute('parentstudentinfo'))
  }
  _handleSchoolInfoPress = () => {
		this.props.navigator.push(Router.getRoute('schoolinfo'))
  }
  _handleScholarshipPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/counseling-and-career-guidance/scholarships/');
  }
}
const styles = StyleSheet.create({
	container: {
	flex: 1,
	backgroundColor: '#990033',
  },
   mainContainer: {
	flex: 1,
	alignItems: 'center',
    backgroundColor: '#999999',
    paddingVertical: 25,
    paddingHorizontal: 5,
	marginBottom: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#CC0033',
  },
  option: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  button: {
	flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderRadius: 5,
    borderColor: '#cccccc',
    padding: 5,
    marginTop: 10,
	marginBottom: 10,
    backgroundColor: '#990033',
	width: 280,
  },
  label: {
    width: 200,
	marginLeft: 5,
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '600',
    color: '#dddddd'
  },
});
