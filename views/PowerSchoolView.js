import React from 'react';
import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class PowerSchoolView extends React.Component {

  render() {
    return (
      <View style={styles.mainContainer}>
		<View style={styles.option}>
			<TouchableOpacity onPress={this._handleStudentParentPress} style={styles.button}>
			 <Image
				source={require('../assets/images/PS.png')}
				fadeDuration={0}
				style={{width:25, height: 25}}
			/>
             <Text style={styles.label}>
                Student & Parent Link
              </Text>
            </TouchableOpacity>
		</View>

        <View style={styles.option}>
           <TouchableOpacity onPress={this._handleTeacherPress} style={styles.button}>
			<Image
				source={require('../assets/images/PS.png')}
				fadeDuration={0}
				style={{width:25, height: 25}}
			/>
            <Text style={styles.label}>
                Teacher Link
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.option}>
          <TouchableOpacity onPress={this._handleAdministratorPress} style={styles.button}>
			<Image
				source={require('../assets/images/PS.png')}
				fadeDuration={0}
				style={{width:25, height: 25}}
			/>
		  <Text style={styles.label}>
			   Administrator Link
		  </Text>
            </TouchableOpacity>
        </View>
		
		<View style={styles.option}>
          <TouchableOpacity onPress={this._handleGuestTeacherPress} style={styles.button}>
			<Image
				source={require('../assets/images/PS.png')}
				fadeDuration={0}
				style={{width:25, height: 25}}
			/>
		  <Text style={styles.label}>
			   Guest Teacher Link
		  </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  _handleStudentParentPress = () => {
    Linking.openURL('https://ps.helenaschools.org/public/home.html');
  }
  _handleTeacherPress = () => {
    Linking.openURL('https://ps.helenaschools.org/teachers/pw.html');
  } 
   _handleAdministratorPress = () => {
    Linking.openURL('https://ps.helenaschools.org/admin/pw.html');
  }
 _handleGuestTeacherPress = () => {
    Linking.openURL('https://ps.helenaschools.org/subs/pw.html');
  }
}

const styles = StyleSheet.create({	
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
