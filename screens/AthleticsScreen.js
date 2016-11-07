import React from 'react';
import {
  Image,
  Linking,
  Navigator,
  ScrollView,
  StyleSheet,
  Text, 
  TouchableOpacity,
  View,
} from 'react-native';
import Router from '../navigation/Router';
import {
	Ionicons
} from '@exponent/vector-icons';

import SchoolDirectionsScreen from '../screens/SchoolDirectionsScreen.js';
import TwitterScreen from '../screens/TwitterScreen.js';
import FacebookScreen from '../screens/FacebookScreen.js';

const Button = ({title, name}) => {
  return (	
	<View style={styles.button}>
	  <Ionicons
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


export default class AthleticsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: '   Athletics',
	  backgroundColor: '#990033',
	  titleStyle: {fontSize: 20, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }
  
  render() {
    return (
	<View style={styles.container}>
		<View style={styles.mainContainer}>
		<ScrollView >		
			<TouchableOpacity onPress={this._handleDirectionsPress}>
				<Button title={" Directions to Schools"} name={'android-car'}/>
			</TouchableOpacity>	 

			<TouchableOpacity onPress={this._handleFacebookPress} >
				<Button title={" Facebook"} name={'social-facebook'} />
			</TouchableOpacity>	
			
			<TouchableOpacity onPress={this._handleTwitterPress} >
				<Button title={" Twitter Feed"} name={'social-twitter'} />
			</TouchableOpacity>	

			<TouchableOpacity onPress={this._handleThemePress}>
				<Button title={" Suggest Game Theme"} name={'compose'} />
			</TouchableOpacity>	 

			<Navigator
				navigator = {this.props.navigator}
				renderScene={this.renderScene.bind(this)}
				initialRoute={{component: this.athletics}}   
			/>	
 			
		</ScrollView>
		
		</View>
	  
	  </View>
	 
    );
  }
  
  renderScene(route, nav) {
	if(route.name == 'directions') {
		return <SchoolDirectionsScreen/>
	}
	if(route.name == 'twitter') {
		return <TwitterScreen/>
	}
	if(route.name == 'facebook') {
		return <FacebookScreen/>
	}
  }
	
	_handleDirectionsPress = () => { 
	  this.props.navigator.push(Router.getRoute('directions'))   
	}
	
	_handleFacebookPress = () => { 
	  this.props.navigator.push(Router.getRoute('facebook'))   
	}
	
	_handleTwitterPress = () => { 
	  this.props.navigator.push(Router.getRoute('twitter'))   
	}
	
	_handleThemePress= () => {
	   Linking.openURL('https://goo.gl/forms/zrPKcSboJRdHxVNU2');
	}
}



const styles = StyleSheet.create({
container: {
    flex: 1,
	backgroundColor: '#990033',
  },
  mainContainer: {
	flex: 1,
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
    backgroundColor: '#990033'
  },
  label: {
    width: 230,
	marginLeft: 5,
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '600',
    color: '#dddddd'
  },
});



