import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Ionicons,
  Entypo,
  FontAwesome,
} from '@exponent/vector-icons';
import Router from '../navigation/Router';
import {Components} from 'exponent';

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
  
  const EntypoButton = ({title, name}) => {
  return (
	<View style={styles.button}>
	  <Entypo
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

 const FontAwesomeButton = ({title, name}) => {
  return (
	<View style={styles.button}>
	  <FontAwesome
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

export default class ScheduleScreen extends React.Component {
  static route = {
    navigationBar: {
			title: '  Schedules',
			backgroundColor: '#990033',
			titleStyle: {fontSize: 20, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }
  
  render() {		
    return (
	<View  style={styles.container}>	
		  <View style={styles.mainContainer}>	
			<ScrollView>
				<TouchableOpacity onPress={this.handleCalendarPress}>
					<FontAwesomeButton title={"  Calendar"} name={'calendar'}/>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={this.handleAssemblyPress}>
					<Button title={"  Assembly"} name={'ios-clock'}/>
				</TouchableOpacity>	
				
				<TouchableOpacity onPress={this.handleDailyPress}>
					<Button title={"  Daily"} name={'clock'}/>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={this.handleMondayPress}>
					<EntypoButton title={"  Monday"} name={'medium-with-circle'}/>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={this.handleSemTestPress}>
					<Button title={"  Semester Test"} name={'ios-list'}/>
				</TouchableOpacity>						
			</ScrollView>
		  </View>
	  </View>
	);
	}
	renderScene(route, nav) {}
   
    handleCalendarPress = () => {
		Linking.openURL('https://drive.google.com/open?id=0ByEkiWBvNiqLOHR6NTNnMXNud2M');
	}
   
	handleSemTestPress = () => {
		Linking.openURL('https://drive.google.com/open?id=0ByEkiWBvNiqLc2hvTHFfcmdRZDg');
	}
	
	handleDailyPress = () => {
		Linking.openURL('https://drive.google.com/open?id=0ByEkiWBvNiqLZ050V1A2b3VZN1E');
	}
	
	handleMondayPress = () => {
		Linking.openURL('https://drive.google.com/open?id=0ByEkiWBvNiqLS0t0dTBrVTFtUU0');
	}
	
	handleAssemblyPress = () => {
		Linking.openURL('https://drive.google.com/open?id=0ByEkiWBvNiqLc29CRzVfUUc3SFU');
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
	alignItems: 'center',
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
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#dddddd'
  },
});
