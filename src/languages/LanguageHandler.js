import {Platform, AsyncStorage, NativeModules} from 'react-native';

import nlJSON from './nl.json';
import enJSON from './en.json';

export default class LanguageHandler {
  static myInstance = null;
  static language = undefined;

  //* use the class as a singelton so that the language stays the same through the entire project.
  static getInstance() {
    if (LanguageHandler.myInstance == null) {
      this.countryCodeMap = new Map();
      LanguageHandler.myInstance = new LanguageHandler();
      this.myInstance.setDefaults();
    }
    return this.myInstance;
  }

  //* get the language from the device that's used
  setDefaults = () => {
    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
    this.setCountryCodeInAsync(deviceLanguage);
    this.languageJSON = this.getFileToUse(deviceLanguage);
    this.language = this.objToStrMap(this.languageJSON.dictionary);

    console.log('language: ', this.language);
  };

  getFileToUse = (key) => {
    switch (key) {
      case 'nl_NL':
        return nlJSON;
        break;
      case 'en_US':
        return enJSON;
        break;
      default:
        return enJSON;
        break;
    }
  };

  //* save the country code in the Async storage so it can be used to determine the language to use
  setCountryCodeInAsync = async (countryCode) => {
    try {
      const result = await AsyncStorage.setItem('COUNTRYCODE', countryCode);
    } catch (error) {
      console.log(
        'error occured while setting country code in async storage: ',
        error,
      );
    }
  };

  //* set a new country code and retrieve the dictionary to use.
  setLanguage = async (countryCode) => {
    this.setCountryCodeInAsync(countryCode);
    this.languageJSON = this.getFileToUse(countryCode);
    this.language = this.objToStrMap(this.languageJSON.dictionary);
  };

  objToStrMap = (obj) => {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  };

  getWord = (key) => {
    return this.language.get(key);
  };
}
