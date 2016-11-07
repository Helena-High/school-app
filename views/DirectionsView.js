import React from 'react';
import {Components} from 'exponent';

export default class DirectionsView extends React.Component {
  render(){
    return(
     <Components.MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 46.6055,
          longitude: -112.0245,
          latitudeDelta: 0.0722,
          longitudeDelta: 0.0221,
        }}
      /> 
    );
  }
}

