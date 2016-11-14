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
  FontAwesome,
} from '@exponent/vector-icons';

export default class StudentLifeView extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleAnnouncementsPress} style={styles.button}>
			  <MaterialIcons
					name={'announcement'}
					size={23}
					color={'#cccccc'}
			  />
             <Text style={styles.label}>
                Announcements
              </Text>
            </TouchableOpacity>
		</View>
		
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleCattyShackPress} style={styles.button}>
			 <Image
				source={require('../assets/images/CattyShack.png')}
				fadeDuration={0}
				style={{width:25, height: 25}}
			/>
             <Text style={styles.label}>
                Catty Shack
              </Text>
            </TouchableOpacity>
		</View>
	  
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleClubsPress} style={styles.button}>
			 <FontAwesome
					name={'key'}
					size={23}
					color={'#cccccc'}
			  />	
             <Text style={styles.label}>
                Clubs & Activities
              </Text>
            </TouchableOpacity>
		</View>
		
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleStallStreetPress} style={styles.button}>
			 <FontAwesome
					name={'newspaper-o'}
					size={23}
					color={'#cccccc'}
			  />	
             <Text style={styles.label}>
                Stall Street Journal
              </Text>
            </TouchableOpacity>
		</View>
		
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleSuggestMusicPress} style={styles.button}>
			  <Ionicons
					name={'music-note'}
					size={23}
					color={'#cccccc'}
			  />	
             <Text style={styles.label}>
                Friday's Music
              </Text>
            </TouchableOpacity>
		</View>	
	  </View>
    );
  }

 _handleCattyShackPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/2015/11/06/catty-shack-specials/');
  }

 _handleAnnouncementsPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/about/newsletter/daily-bulletin/');
  }
  
 _handleStallStreetPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/extracurricular/activities/student-council/');
  }
  
_handleClubsPress = () => {
    Linking.openURL('http://hhs.helenaschools.org/extracurricular/activities//');
  }
  
 _handleSuggestMusicPress= () => {
    Linking.openURL('https://goo.gl/forms/ypX1GsweTv4inZlg2');
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
    paddingVertical: 7,
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
	marginLeft: 10,
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '600',
    color: '#dddddd'
  },
});
