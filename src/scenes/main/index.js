import React, {Component} from 'react';

import {View, SafeAreaView, StyleSheet, Text} from 'react-native';

import {DefaultAtom} from '_atoms';
import {DefaultMolecule} from '_molecules';
import {DefaultOrganism} from '_organisms';
import {LanguageHandler} from '_languages';

export default class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Main Screen</Text>
        <Text>
          Language handler test:
          {LanguageHandler.getInstance().getWord('testWord')}
        </Text>
        <DefaultAtom />
        <DefaultMolecule />
        <DefaultOrganism />
        <Text>hoi</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
