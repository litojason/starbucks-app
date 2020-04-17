import React, {Component} from 'react';
import {Text, View, Image, Switch, TouchableOpacity} from 'react-native';

import {COLORS, STYLES} from './styles';

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
    };
  }

  handleSwitch = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };

  render() {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          paddingVertical: 20,
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.text2,
        }}>
        <View
          style={{
            width: 60,
            height: 40,
            borderRadius: 7,
            backgroundColor: COLORS.white,
            overflow: 'hidden',
            elevation: 7,
          }}>
          <Image
            source={require('../assets/card.png')}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}
          />
        </View>

        <View style={{flex: 1, marginLeft: 20, justifyContent: 'center'}}>
          <Text style={STYLES.textSmallBold}>Card balance (3014)</Text>
          <Text style={STYLES.textMediumBold}>$22.40</Text>
        </View>

        <Switch
          style={{scaleX: 1.2, scaleY: 1.2}}
          trackColor={{false: COLORS.text3, true: COLORS.main2}}
          thumbColor={COLORS.white}
          onValueChange={this.handleSwitch}
          value={this.state.isEnabled}
        />
      </View>
    );
  }
}
