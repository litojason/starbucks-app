import React from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home';
import Rewards from '../screens/Rewards';
import RewardsDetails from '../screens/RewardsDetails';

const config = {
  animation: 'timing',
  config: {
    duration: 500,
  },
};

const Stack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Rewards: {
      screen: Rewards,
    },
    RewardsDetails: {
      screen: RewardsDetails,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      transitionSpec: {
        open: config,
        close: config,
      },

      cardStyleInterpolator: ({current, next, layouts}) => ({
        cardStyle: {
          opacity: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              })
            : 1,

          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),

          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
            {
              translateX: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -layouts.screen.width],
                  })
                : 0,
            },
          ],
        },
      }),
    },
  },
);

const Routes = createAppContainer(Stack);

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Routes />
      </View>
    );
  }
}
