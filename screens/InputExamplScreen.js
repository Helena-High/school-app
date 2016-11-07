import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  WebView,
  Text,
  TextInput,
  Navigator,
  TouchableOpacity,
} from 'react-native';
import Router from '../navigation/Router';
import {
  ExponentLinksView,
} from '@exponent/samples';

export default class TwitterScreen extends React.Component {
  static route = {
    navigationBar: {
      title: '  Twitter Feed',
	  backgroundColor: '#990033',
	  titleStyle: {fontSize: 25, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }

  constructor(props)
  {
	 super(props);
	this.state = {text: 'Enter User Name'};
  }
	 
  JS = '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';
  source = this.JS + '<blockquote class="twitter-tweet" data-lang="es"><p lang="en" dir="ltr">8 TED Talks to inspire projects with kids: <a href="https://twitter.com/TEDTalks/status/758116657638309896">https://twitter.com/TEDTalks/status/758116657638309896</a> <a href="https://twitter.com/TEDTalks/status/758116657638309896">pic.twitter.com/HMmYAeP7Km</a></p>&mdash; TED Talks (@TEDTalks) <a href="https://twitter.com/TEDTalks/status/758116657638309896">27 de julio de 2016</a></blockquote>';

  render() {
    return (
	<View style={styles.container}>
		<Navigator
				navigator = {this.props.navigator}
				renderScene={this.renderScene.bind(this)}
				initialRoute={{component: this.athletics}}   />	
	
	<WebView style={styles.container}
        source={{html: this.source}}
        javaScriptEnabled={true}
      />
	  
	   <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            maxLength={20}
            multiline={false}
			value={this.state.text}
       />
	   
          <TouchableOpacity
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={this._handleDirectionsPress}
            >
            <Text style={styles.label}>Directions to Schools</Text>
          </TouchableOpacity>
	  
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

     
        <ExponentLinksView />

      </ScrollView>
	  </View>
    );
  }
  
  renderScene(route, nav) {
	if(route.name == 'directions') {
     return <SchoolDirectionsScreen/>
	}
	
	  _handleDirectionsPress = () => { 
	  this.props.navigator.push(Router.getRoute('directions'))   
	}
	}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
	paddingTop: 15,
  },
   input: {
    width: 250,
    color: '#555555',
    padding: 10,
    height: 50,
    borderColor: '#32C5E6',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#328FE6',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#32c5e6'
  },
  label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff'
  }
});
