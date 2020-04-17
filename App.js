import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import Rewards from './screens/Rewards';
import IceBlended from './screens/IceBlended';
import Chat from './screens/Chat';

export default class App extends Component {
  render() {
    // return <Home />;
    // return <SignIn />;
    // return <Rewards />;
    // return <IceBlended />;
    return <Chat />;
  }
}
