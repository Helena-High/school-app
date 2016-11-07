/**
*  @flow
 */

import {
  AppRegistry,
} from 'react-native';

export default function registerRootComponent(component: ReactClass<{}>) {
  AppRegistry.registerComponent('main', () => component);
}
