// @flow

import {
  NativeModules,
} from 'react-native';

export async function getContactsAsync(fields: ['phone_number' | 'email'] = []) {
  return await NativeModules.ExponentContacts.getContactsAsync(fields);
}

export const PHONE_NUMBER = 'phone_number';
export const EMAIL = 'email';
