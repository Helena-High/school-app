import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import PowerSchoolScreen from '../screens/PowerSchoolScreen';
import AthleticsScreen from '../screens/AthleticsScreen';
import StudentLifeScreen from '../screens/StudentLifeScreen';
import ParentStudentInfoScreen from '../screens/ParentStudentInfoScreen';
import SchoolInfoScreen from '../screens/SchoolInfoScreen';
import SchoolDirectionsScreen from '../screens/SchoolDirectionsScreen';
import HHSMapScreen from '../screens/HHSMapScreen';
import TwitterScreen from '../screens/TwitterScreen';
import FacebookScreen from '../screens/FacebookScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  athletics: () => AthleticsScreen,
  powerschool: () => PowerSchoolScreen,
  info: () => InfoScreen,
  studentlife: () => StudentLifeScreen,
  parentstudentinfo: () => ParentStudentInfoScreen,
  schoolinfo: () => SchoolInfoScreen,
  directions: () => SchoolDirectionsScreen,
  hhsmap: () => HHSMapScreen,
  twitter: () => TwitterScreen,
  facebook: () => FacebookScreen,
  rootNavigation: () => RootNavigation,
}));
