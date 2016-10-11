export * from './Exponent';

import { NativeModules } from 'react-native';
import * as Exponent from './Exponent';
export default Exponent;

if (global) {
  global.__exponent = Exponent;
}
