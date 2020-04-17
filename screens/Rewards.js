import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  Easing,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS, STYLES, DIMENSIONS} from '../components/styles';
import CardRewardsList from '../components/CardRewardsList';

const PROGRESS = 84;
const TOTAL = 125;
const DATA = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

export default class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
    this.animatedAppear = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount = () => {
    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', () =>
      this.handleAnimation(),
    );
  };

  componentWillUnmount = () => {
    this.focusListener.remove();
  };

  handleAnimation = () => {
    Animated.sequence([
      Animated.timing(this.animatedAppear, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedValue, {
        toValue: PROGRESS,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
    this.animatedValue.addListener((progress) => {
      this.setState({progress: parseInt(progress.value)});
    });
  };

  render() {
    const animatedOpacity = this.animatedAppear.interpolate({
      inputRange: [0, 1],
      outputRange: [0.1, 1],
    });
    const animatedTranslateY = this.animatedAppear.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 0],
    });

    const barWidth = this.animatedValue.interpolate({
      inputRange: [0, PROGRESS],
      outputRange: ['0%', `${(PROGRESS / TOTAL) * 100}%`],
    });

    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={STYLES.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={27}
              color={COLORS.text1}
            />
          </TouchableOpacity>
          <Text style={STYLES.headerTitle}>Rewards</Text>
          <View style={{width: 27, height: 27}} />
        </View>

        <Animated.View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: 30,
            backgroundColor: COLORS.white,
            opacity: animatedOpacity,
          }}>
          <View>
            <Text style={{fontSize: 36, color: COLORS.text1}}>
              {this.state.progress}
              <Text style={{fontSize: 24}}>
                {' '}
                / {TOTAL}
                <MaterialCommunityIcons
                  name="star"
                  size={24}
                  color={COLORS.gold}
                />
              </Text>
            </Text>

            <Text style={STYLES.textMediumBold}>
              <Text style={{color: COLORS.gold}}>41</Text> stars until next
              reward
            </Text>

            <View
              style={{
                height: 10,
                borderRadius: 5,
                backgroundColor: COLORS.lightGrey,
                elevation: 0.5,
              }}>
              <Animated.View
                style={{
                  width: barWidth,
                  height: '100%',
                  borderRadius: 5,
                  backgroundColor: COLORS.gold,
                }}
              />
            </View>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Image
              source={require('../assets/tumblr.png')}
              style={{
                flex: 1,
                width: null,
                height: null,
                marginRight: -20,
                marginTop: -50,
                marginBottom: -20,
                resizeMode: 'contain',
              }}
            />
          </View>
        </Animated.View>

        <Animated.FlatList
          data={DATA}
          style={{
            flex: 1,
            transform: [
              {
                translateY: animatedTranslateY,
              },
            ],
            opacity: animatedOpacity,
          }}
          contentContainerStyle={{paddingHorizontal: 30}}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: '100%',
                borderWidth: 0.25,
                borderColor: COLORS.text3,
              }}
            />
          )}
          renderItem={({item}) => (
            <CardRewardsList
              onAnimation={true}
              navigate={() => this.props.navigation.navigate('RewardsDetails')}
            />
          )}
        />
      </View>
    );
  }
}
