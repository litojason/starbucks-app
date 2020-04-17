import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, STYLES, DIMENSIONS} from '../components/styles';
import CardRewardsList from '../components/CardRewardsList';
import CardList from '../components/CardList';

const ICONS = [
  {id: 1, name: 'RELOAD', icon: 'wallet-outline', screen: ''},
  {id: 2, name: 'PAY', icon: 'cash-multiple', screen: ''},
  {id: 3, name: 'REWARDS', icon: 'gift-outline', screen: ''},
  {id: 4, name: 'SHOP', icon: 'home-group', screen: ''},
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
  }

  componentDidMount = () => {
    Animated.timing(this.animation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  render() {
    const logoTranslateY = this.animation.interpolate({
      inputRange: [0.5, 1],
      outputRange: [30, 0],
    });
    const logoOpacity = this.animation.interpolate({
      inputRange: [0.3, 1],
      outputRange: [0, 1],
    });

    const imageTranslateY = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });
    const imageOpacity = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    const cardTranslateY1 = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 0],
    });
    const cardOpacity1 = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1],
    });
    const cardTranslateY2 = this.animation.interpolate({
      inputRange: [0.5, 1],
      outputRange: [100, 0],
    });
    const cardOpacity2 = this.animation.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0.3, 1],
    });

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: COLORS.white}}
        contentContainerStyle={{alignItems: 'center'}}>
        <Animated.Image
          source={require('../assets/starbucks.jpg')}
          style={{
            position: 'absolute',
            top: 20,
            width: DIMENSIONS.width,
            height: DIMENSIONS.height / 3,
            resizeMode: 'cover',
            transform: [
              {
                translateY: imageTranslateY,
              },
            ],
            opacity: imageOpacity,
          }}
        />

        <Animated.Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: COLORS.black,
            transform: [
              {
                translateY: logoTranslateY,
              },
            ],
            opacity: logoOpacity,
          }}>
          STARBUCKS
        </Animated.Text>

        <Animated.View
          style={{
            width: '90%',
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: DIMENSIONS.height / 3 - 60,
            marginBottom: 40,
            borderRadius: 10,
            backgroundColor: COLORS.white,
            elevation: 4,
            transform: [
              {
                translateY: cardTranslateY1,
              },
            ],
            opacity: cardOpacity1,
          }}>
          <View
            style={{
              width: '100%',
              paddingBottom: 10,
              marginBottom: 10,
              backgroundColor: COLORS.white,
              borderBottomWidth: 0.5,
              borderBottomColor: COLORS.text2,
            }}>
            <Text style={STYLES.textBig}>Card balance</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {ICONS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  paddingVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={30}
                  color={COLORS.text2}
                />
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: COLORS.text2,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        <Animated.View
          style={{
            width: '85%',
            marginBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            transform: [
              {
                translateY: cardTranslateY2,
              },
            ],
            opacity: cardOpacity2,
          }}>
          <Text style={STYLES.textBig}>Card rewards</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Rewards')}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={30}
              color={COLORS.text2}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={{
            width: '95%',
            paddingHorizontal: 20,
            borderRadius: 10,
            backgroundColor: COLORS.white,
            elevation: 2,
            transform: [
              {
                translateY: cardTranslateY2,
              },
            ],
            opacity: cardOpacity2,
          }}>
          <CardRewardsList />
          <View
            style={{
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: COLORS.text2,
            }}>
            <CardRewardsList />
          </View>
          <CardRewardsList />
        </Animated.View>

        <View style={{width: '90%', marginTop: 20}}>
          <CardList />
          <CardList />
          <CardList />
        </View>
      </ScrollView>
    );
  }
}
