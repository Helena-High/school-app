'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  requireNativeComponent,
 } from 'react-native';

export default class BlurView extends Component {
  static propTypes = {
    tintEffect: PropTypes.oneOf(['light', 'default', 'dark']).isRequired,
    ...View.propTypes,
  };

  static defaultProps = {
    tintEffect: 'default',
  }

  render() {
    return (
      <NativeBlurView
        {...this.props}
        style={[this.props.style, { backgroundColor: 'transparent' }]}
      />
    );
  }
}

const NativeBlurView = requireNativeComponent('ExponentBlurView', null);
