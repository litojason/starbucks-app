import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Animated} from 'react-native';

import {COLORS, STYLES, DIMENSIONS} from './styles';

export default class CardRewardsList extends Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
  }

  onAnimation = () => {
    const {onAnimation} = this.props;
    if (onAnimation) {
      Animated.timing(this.animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        this.props.navigate();
        setTimeout(() => {
          this.animation.setValue(0);
        }, 500);
      });
    }
  };

  render() {
    const translateX = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, DIMENSIONS.width],
    });

    return (
      <TouchableOpacity onPress={this.onAnimation}>
        <Animated.View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20,
            transform: [
              {
                translateX: translateX,
              },
            ],
          }}>
          <Image
            source={require('../assets/avatar.jpg')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              resizeMode: 'cover',
            }}
          />
          <View style={{flex: 1, marginLeft: 20, justifyContent: 'center'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={STYLES.textMedium}>Free coffee beans</Text>
              <Text style={STYLES.textMedium}>
                <Text style={{color: COLORS.main2}}>4</Text> / 10
              </Text>
            </View>
            <Text style={STYLES.textSmall}>A complementary grande</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
