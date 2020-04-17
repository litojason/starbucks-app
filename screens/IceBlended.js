import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';

import {COLORS, STYLES, DIMENSIONS} from '../components/styles';
import ModalCustomize from '../components/ModalCustomize';

const DATA = [
  {title: 'Matcha Green Tea Frappuccino', price: 4.25},
  {title: 'Christmas Brulee Ice Latte', price: 2.95},
  {title: 'Mango Passionfruit Blended', price: 2.65},
  {title: 'Horchata Cinnamon Blended', price: 3.25},
];

const NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class IceBlended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.animation = new Animated.Value(0);
  }

  // componentDidMount() {
  //   this.activeInterval = setInterval(this.scrolling, 100);
  // }

  // componentWillUnmount = () => {
  //   clearInterval(this.activeInterval);
  // };

  startAnimation = () => {
    Animated.timing(this.animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  closeAnimation = () => {
    Animated.timing(this.animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/drink.png')}
          style={{width: '100%', height: '70%', resizeMode: 'contain'}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: COLORS.text1,
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}>
          {item.title}
        </Text>
        <Text style={{fontSize: 16, color: COLORS.text2}}>${item.price}</Text>
      </View>
    );
  };

  render() {
    const animatedBgColor = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.white, COLORS.lightGrey],
    });
    const animatedTranslateY = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -DIMENSIONS.height / 3],
    });

    const modalTranslateY = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [DIMENSIONS.height, 0],
    });

    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: animatedBgColor,
          // marginTop: animatedTranslateY,
        }}>
        <View style={STYLES.header}>
          <TouchableOpacity
          // onPress={() => this.props.navigation.goBack()}
          >
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={27}
              color={COLORS.text1}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.text1,
            }}>
            Ice blended
          </Text>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={27}
            color={COLORS.text1}
          />
        </View>

        <View style={{flex: 1}}>
          <Carousel
            data={DATA}
            // ref={(ref) => (this.carousel = ref)}
            sliderWidth={DIMENSIONS.width}
            itemWidth={DIMENSIONS.width / 1.75}
            renderItem={this.renderItem}
            inactiveSlideOpacity={0.5}
            inactiveSlideShift={20}
            inactiveSlideScale={0.75}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginBottom: 30,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              // onPress={() => this.setModalVisible(true)}
              onPress={this.startAnimation}
              style={[inline.container, {marginRight: 20}]}>
              <Text style={inline.text}>CUSTOMIZE</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={COLORS.main2}
              />
            </TouchableOpacity>

            <TouchableOpacity style={inline.container}>
              <Text style={inline.text}>QTY</Text>
              <View
                style={{
                  height: 20,
                  marginLeft: 20,
                  marginRight: 10,
                  borderWidth: 0.75,
                  borderColor: COLORS.text3,
                }}
              />
              <Text style={inline.text}>1</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: COLORS.main2,
              elevation: 4,
            }}>
            <MaterialCommunityIcons
              name="plus"
              size={24}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            padding: 20,
            paddingTop: 10,
            borderTopWidth: 3,
            borderTopColor: COLORS.lightGrey,
            backgroundColor: COLORS.white,
          }}>
          <MaterialCommunityIcons
            name="home-outline"
            size={27}
            color={COLORS.text2}
          />

          <Text
            style={{
              flex: 1,
              marginHorizontal: 20,
              fontSize: 16,
              color: COLORS.text2,
            }}>
            Jalan Kabil 1
          </Text>

          <MaterialCommunityIcons
            name="basket-fill"
            size={27}
            color={COLORS.text2}
          />
        </View>

        <ModalCustomize
          // modalVisible={modalVisible}
          // setModalVisible={this.setModalVisible}
          modalTranslateY={modalTranslateY}
          closeAnimation={this.closeAnimation}
        />
      </Animated.View>
    );
  }
}

const inline = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: COLORS.text3,
  },
  text: {
    fontSize: 14,
    color: COLORS.text2,
    letterSpacing: 1,
  },
});
