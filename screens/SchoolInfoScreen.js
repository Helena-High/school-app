import React from 'react';
import {
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import Router from '../navigation/Router';

export default class SchoolInfoScreen extends React.Component {
  static route = {
    navigationBar: {
      title: '  School Info',
	  backgroundColor: '#990033',
	  titleStyle: {fontSize: 20, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.mainContainer}>
			<View style={styles.option}>
				<TouchableOpacity onPress={this._handleHHSMapPress} style={styles.button}>
				 <Image
					source={require('../assets/images/BengalH.png')}
					fadeDuration={0}
					style={{width:25, height: 25}}
				/>
				 <Text style={styles.label}>
					HHS Map
				  </Text>
				</TouchableOpacity>
			</View>
			
			<View style={styles.option}>
				<TouchableOpacity onPress={this._handleNewsletterPress} style={styles.button}>
				 <Image
					source={require('../assets/images/BengalH.png')}
					fadeDuration={0}
					style={{width:25, height: 25}}
				/>
				 <Text style={styles.label}>
					Newsletter
				  </Text>
				</TouchableOpacity>
			</View>
		  
			<View style={styles.option}>
				<TouchableOpacity onPress={this._handleSchedulesPress} style={styles.button}>
				 <Image
					source={require('../assets/images/BengalH.png')}
					fadeDuration={0}
					style={{width:25, height: 25}}
				/>
				 <Text style={styles.label}>
					Schedules
				  </Text>
				</TouchableOpacity>
			</View>
			
			<View style={styles.option}>
				<TouchableOpacity onPress={this._handleStaffDirectoryPress} style={styles.button}>
				 <Image
					source={require('../assets/images/BengalH.png')}
					fadeDuration={0}
					style={{width:25, height: 25}}
				/>
				 <Text style={styles.label}>
					Staff Directory
				  </Text>
				</TouchableOpacity>
			</View>
		</View>
	  </View>
    );
  }
  
  renderScene(route, nav) {}

 _handleNewsletterPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/about/newsletter/');
  }

 _handleHHSMapPress = () => {
    Linking.openURL('https://drive.google.com/open?id=0ByEkiWBvNiqLbjc0ZjJFZl9fV0E'); 
  }
  
 _handleStaffDirectoryPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/contact/staff/');
  }
  
_handleSchedulesPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/about/daily-schedule/');
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