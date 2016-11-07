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
import {Components} from 'exponent';
import DirectionsView from '../views/DirectionsView';
import BigSky from '../assets/images/BigSky.png';
import BillingsS from '../assets/images/BillingsS.png';
import BillingsW from '../assets/images/BillingsW.png';
import BozemanH from '../assets/images/BozemanH.png';
import CapitalH from '../assets/images/CapitalH.png';
import CMR from '../assets/images/CMR.png';
import GlacierH from '../assets/images/GlacierH.png';
import BengalH from '../assets/images/BengalH.png';
import Hellgate from '../assets/images/Hellgate.png';
import Flathead from '../assets/images/Flathead.png';
import Sentinal from '../assets/images/Sentinal.png';
import Skyview from '../assets/images/Skyview.png';

const Button = ({title, imageName, buttonColor, labelColor}) => {
  return (
	<View style={styles.button} backgroundColor={buttonColor} borderColor={labelColor} color={labelColor}>
	  <Image
		source={imageName}
		fadeDuration={0}
		style={{width:40, height: 40}}
	  />
	  <Text style={[styles.label, {color: labelColor}]} >	  
        {title}
      </Text>
	</View>   
  );
};

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
			title: 'Directions',
			backgroundColor: '#990033',
			titleStyle: {fontSize: 20, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }
  
  constructor(props){
	  super(props);
	  this.state = {
		  SchoolDirectionsScreen: true,
	  };
  }
  
  render() {
	if(!this.state) return(< DirectionsView/>)		
    return (
	<View  style={styles.container}>	
      <View style={styles.mainContainer}>	
		<ScrollView>
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Big Sky High School"} imageName={BigSky} buttonColor={'#001B64'} labelColor={'#EECC65'}/>
			</TouchableOpacity>
		
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Billings Senior High School"} imageName={BillingsS} buttonColor={'#010101'} labelColor={'#FF6601'}/>
			</TouchableOpacity>	
			
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Billings West High School"} imageName={BillingsW} buttonColor={'#010101'} labelColor={'#FFCF00'}/>
			</TouchableOpacity>	
			
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Bozeman High School"} imageName={BozemanH} buttonColor={'#CC0001'} labelColor={'#010101'}/>
			</TouchableOpacity>	
			
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Capital High School"} imageName={CapitalH} buttonColor={'#F3BC23'} labelColor={'#472005'}/>
			</TouchableOpacity>	
			
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  C.M. Russell High School"} imageName={CMR} buttonColor={'#508D24'} labelColor={'#F3BC23'}/>
			</TouchableOpacity>
			
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Glacier High School"} imageName={GlacierH} buttonColor={'#2C489B'} labelColor={'#FFFFFF'}/>
			</TouchableOpacity>
			
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Helena High School"} imageName={BengalH} buttonColor={'#990033'} labelColor={'#CCCCCC'}/>
			</TouchableOpacity>	  
			
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Hellgate High School"} imageName={Hellgate} buttonColor={'#D50101'} labelColor={'#FDCB01'}/>
			</TouchableOpacity>	  
			
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Flathead High School"} imageName={Flathead} buttonColor={'#F1592A'} labelColor={'#010101'}/>
			</TouchableOpacity>	
		
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Sentinal High School"} imageName={Sentinal} buttonColor={'#EED516'} labelColor={'#4B2A7B'}/>
			</TouchableOpacity>		
			
			<TouchableOpacity onPress={this.handleButtonPress}>
				<Button title={"  Skyview High School"} imageName={Skyview} buttonColor={'#2E2A77'} labelColor={'#AFB4B8'}/>
			</TouchableOpacity>	
		</ScrollView>
      </View>
	  </View>
    );
  } 

  handleButtonPress = () => { 
	this.state= false 
	this.forceUpdate()
}}
 
 
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
    marginTop: 10,
	marginBottom: 10,
  },
  label: {
	justifyContent: 'center', 
	alignItems: 'center', 
    width: 230,
	marginLeft: 5,
    alignSelf: 'center',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
	color:'#dddddd'
  },
});
