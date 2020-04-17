import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, STYLES, DIMENSIONS} from '../components/styles';

export default class SignIn extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: COLORS.lightGrey,
        }}>
        <Image
          source={require('../assets/icon.png')}
          style={{
            position: 'absolute',
            top: -DIMENSIONS.width / 3.5,
            left: DIMENSIONS.width / 2.5,
            width: DIMENSIONS.width,
            height: DIMENSIONS.width,
            resizeMode: 'cover',
            opacity: 0.4,
          }}
        />
        <View style={{marginTop: DIMENSIONS.width / 2}}>
          <Text style={{fontSize: 30, color: COLORS.black}}>Sign in</Text>
          <View
            style={{
              width: '100%',
              marginTop: 30,
              marginBottom: 30,
              padding: 20,
              backgroundColor: COLORS.white,
              borderRadius: 3,
              elevation: 3,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color={COLORS.text1}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor={COLORS.text3}
                style={[
                  STYLES.textBig,
                  {
                    flex: 1,
                    margin: 0,
                    marginHorizontal: 20,
                    padding: 0,
                  },
                ]}
              />
            </View>

            <View
              style={{
                marginTop: 10,
                borderTopWidth: 0.25,
                borderColor: COLORS.text2,
              }}>
              <Text
                style={{fontSize: 14, color: COLORS.gold, textAlign: 'right'}}>
                Forgot password?
              </Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color={COLORS.text1}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={COLORS.text3}
                style={[
                  STYLES.textBig,
                  {
                    flex: 1,
                    margin: 0,
                    marginHorizontal: 20,
                    padding: 0,
                  },
                ]}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 20,
                  marginRight: 10,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  borderWidth: 1,
                  borderColor: COLORS.gold,
                }}
              />
              <Text style={{fontSize: 14, color: COLORS.text3}}>
                Keep me signed in
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                marginRight: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
                backgroundColor: COLORS.gold,
                borderRadius: 3,
              }}>
              <Text style={{fontSize: 16, color: COLORS.white}}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
