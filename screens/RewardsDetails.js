import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS} from '../components/styles';

export default class RewardsDetails extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: 20,
            backgroundColor: COLORS.white,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Rewards')}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={27}
              color={COLORS.text1}
            />
          </TouchableOpacity>
          <View style={{width: 27, height: 27}} />
        </View>
      </View>
    );
  }
}
