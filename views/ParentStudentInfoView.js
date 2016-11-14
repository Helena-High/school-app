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
import {
  Ionicons,
  MaterialIcons,
} from '@exponent/vector-icons';

export default class ParentStudentInfoView extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleDueDatesPress} style={styles.button}>
			  <MaterialIcons
					name={'date-range'}
					size={23}
					color={'#cccccc'}
			  />
             <Text style={styles.label}>
                Due Dates
              </Text>
            </TouchableOpacity>
		</View>
		
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleGraduationPress} style={styles.button}>
			  <Ionicons
					name={'university'}
					size={23}
					color={'#cccccc'}
			  />
             <Text style={styles.label}>
                Graduation
              </Text>
            </TouchableOpacity>
		</View>
	  
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleSuicideAwarenessPress} style={styles.button}>
			 <Ionicons
					name={'heart-broken'}
					size={23}
					color={'#cccccc'}
			  />
             <Text style={styles.label}>
                Suicide Awareness
              </Text>
            </TouchableOpacity>
		</View>
		
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleTrafficEducationPress} style={styles.button}>
			  <Ionicons
					name={'model-s'}
					size={23}
					color={'#cccccc'}
			  />
             <Text style={styles.label}>
                Traffic Education
              </Text>
            </TouchableOpacity>
		</View>
	  </View>
    );
  }

 _handleGraduationPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/about/helena-high-school-graduation/');
  }

 _handleDueDatesPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/about/newsletter/daily-bulletin/');
  }
  
 _handleTrafficEducationPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/traffic-education/');
  }
  
_handleSuicideAwarenessPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/counseling-and-career-guidance/suicide-awareness/');
  }
}

const styles = StyleSheet.create({
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
