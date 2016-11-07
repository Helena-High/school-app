'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
} from 'react-native';

export default class BlurView extends Component {
  static propTypes = {
    tintEffect: PropTypes.oneOf(['light', 'default', 'dark']),
    ...View.propTypes,
  };

  render() {
    let { tintEffect } = this.props;

    let backgroundColor;
    if (tintEffect === 'dark') {
      backgroundColor = 'rgba(0,0,0,0.5)';
    } else if (tintEffect === 'light') {
      backgroundColor = 'rgba(255,255,255,0.7)';
    } else {
      backgroundColor = 'rgba(255,255,255,0.4)';
    }

    return (
      <View
        {...this.props}
        style={[this.props.style, { backgroundColor }]}
      />
    );
  }
}
