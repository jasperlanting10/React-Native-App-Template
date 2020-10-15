import React, {Component} from 'react';

import {View, SafeAreaView, StyleSheet, Text} from 'react-native';

import {DefaultAtom} from '_atoms';
import {DefaultMolecule} from '_molecules';
import {DefaultOrganism} from '_organisms';

export default class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Main Screen</Text>
        <DefaultAtom />
        <DefaultMolecule />
        <DefaultOrganism />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
