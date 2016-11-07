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

  JS = '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';
  source = this.JS + '<a class="twitter-timeline" href="https://twitter.com/Helena_High_MT">Tweets by Helena_High_MT</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
  

  render() {
    return (
	<View style={styles.container}>
		<View style={styles.mainContainer}>
			<WebView flex ={1} 
				source={{html: this.source}}
				javaScriptEnabled={true}
			/>
	  </View>
	  </View>
    );
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
    width: 230,
	marginLeft: 5,
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '600',
	color:'#dddddd'
  },
});