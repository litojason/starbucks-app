import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, STYLES, DIMENSIONS} from './styles';

const SIZE = [
  {title: 'TALL', scale: 1, height: 60},
  {title: 'GRANDE', scale: 1.25, height: 75},
  {title: 'VENTI', scale: 1.5, height: 90},
];

export default class ModalCustomize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  choiceAnimation = (selectedIndex) => {
    this.setState({selectedIndex: selectedIndex});
  };

  render() {
    const {selectedIndex} = this.state;

    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: this.props.modalTranslateY,
          bottom: 0,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          //   onPress={() => setModalVisible(false)}
          onPress={this.props.closeAnimation}
          style={{flex: 1}}
        />
        <View
          style={{
            width: DIMENSIONS.width,
            padding: 30,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: COLORS.white,
            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: COLORS.text1,
              marginBottom: 20,
            }}>
            Matcha Green
          </Text>

          <Text style={STYLES.textBigBold}>Beverage size</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            {SIZE.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.choiceAnimation(index)}
                style={{alignItems: 'center', justifyContent: 'flex-end'}}>
                <View
                  style={{
                    position: 'absolute',
                    top: item.height / 2 - 10,
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: COLORS.main2,
                    elevation: 10,
                    opacity: selectedIndex === index ? 1 : 0,
                  }}
                />
                <Image
                  source={require('../assets/coffee_icon.png')}
                  style={{
                    width: 60,
                    height: item.height,
                    resizeMode: 'contain',
                    marginBottom: 5,
                    transform: [{scaleY: item.scale}],
                    opacity: 0.6,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color:
                      selectedIndex === index ? COLORS.main2 : COLORS.text2,
                    letterSpacing: 1,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{marginVertical: 30}}>
            <Text style={STYLES.textBigBold}>Choice of temperature</Text>
            <View style={inline.cardContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="checkbox-marked-circle"
                    size={24}
                    color={COLORS.main2}
                    style={{marginRight: 10}}
                  />
                  <Text style={STYLES.textMedium}>Hot / Warm</Text>
                </TouchableOpacity>
                <Text style={STYLES.textMedium}>0.00</Text>
              </View>

              <View
                style={{
                  width: '100%',
                  marginVertical: 10,
                  borderWidth: 0.25,
                  backgroundColor: COLORS.text3,
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="checkbox-marked-circle"
                    size={24}
                    color={COLORS.main2}
                    style={{marginRight: 10}}
                  />
                  <Text style={STYLES.textMedium}>Hot / Warm</Text>
                </TouchableOpacity>
                <Text style={STYLES.textMedium}>0.00</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={STYLES.textBigBold}>Choice of temperature</Text>
            <View style={inline.cardContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="checkbox-marked-circle"
                    size={24}
                    color={COLORS.main2}
                    style={{marginRight: 10}}
                  />
                  <Text style={STYLES.textMedium}>Hot / Warm</Text>
                </TouchableOpacity>
                <Text style={STYLES.textMedium}>0.00</Text>
              </View>

              <View
                style={{
                  width: '100%',
                  marginVertical: 10,
                  borderWidth: 0.25,
                  backgroundColor: COLORS.text3,
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="checkbox-marked-circle"
                    size={24}
                    color={COLORS.main2}
                    style={{marginRight: 10}}
                  />
                  <Text style={STYLES.textMedium}>Hot / Warm</Text>
                </TouchableOpacity>
                <Text style={STYLES.textMedium}>0.00</Text>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
      //   </Modal>
    );
  }
}

const inline = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderWidth: 0.8,
    borderRadius: 20,
    borderColor: COLORS.text3,
  },
});
