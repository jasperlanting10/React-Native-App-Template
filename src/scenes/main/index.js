import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';

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
      <View>
        <Text>Main Screen</Text>
        <DefaultAtom />
        <DefaultMolecule />
        <DefaultOrganism />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
