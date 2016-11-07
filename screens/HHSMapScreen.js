import React from 'react';
import {
  Image,
  View,
  WebView,
  StyleSheet,
} from 'react-native';
//import PDFView from 'react-native-pdf-view';
const FileOpener = require('react-native-file-opener');
		  const FilePath = '../assets/pdf/MapofHHS.pdf'; // path of the file 
const FileMimeType = '.pdf'; // mime type of the 
export default class HHSMapScreen extends React.Component {
  static route = {
    navigationBar: {
      title: '  HHS Map',
	  backgroundColor: '#990033',
	  titleStyle: {fontSize: 25, color: '#dddddd', textAlign: 'left', fontWeight: '600'},
    },
  }
  
   constructor(props) {
        super(props);
		
		FileOpener.open(
			FilePath,
    FileMimeType
).then((msg) => {
    console.log('success!!')
},() => {
    console.log('error!!')
});
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
  mapContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  mapImage: {
    width: 300,
    height: 115,
    marginTop: 5,
  },
   pdf: {
        flex:1,

    }
});
