import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, STYLES, DIMENSIONS} from '../components/styles';

// const CHATS = [
//   {id: '1', isUser: false, chat: 'What else would you like?'},
//   {id: '2', isUser: true, chat: 'Large pumpkin spiced latte.'},
//   {id: '3', isUser: false, chat: 'Here is what I have for your order'},
//   {id: '4', isUser: true, chat: 'Yes, that is correct!'},
// ];

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [
        {id: '1', isUser: false, chat: 'What else would you like?'},
        {id: '2', isUser: true, chat: 'Large pumpkin spiced latte.'},
        {id: '3', isUser: false, chat: 'Here is what I have for your order'},
        {id: '4', isUser: true, chat: 'Yes, that is correct!'},
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={[STYLES.header, {elevation: 1}]}>
          <Text style={STYLES.headerTitle}>Starbucks Barista</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={25}
              color={COLORS.text1}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.chats}
          style={{flex: 1}}
          contentContainerStyle={{padding: 20}}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View
              style={{
                alignSelf: item.isUser ? 'flex-end' : 'flex-start',
                maxWidth: DIMENSIONS.width * 0.8,
                minWidth: DIMENSIONS.width * 0,
                marginVertical: 10,
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 15,
                borderBottomLeftRadius: item.isUser ? 15 : 0,
                borderTopRightRadius: item.isUser ? 0 : 15,
                backgroundColor: item.isUser ? COLORS.gold : COLORS.main2,
                elevation: 2,
              }}>
              <Text style={[STYLES.textMediumBold, {color: COLORS.white}]}>
                {item.chat}
              </Text>
            </View>
          )}
        />

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: DIMENSIONS.width - 40,
            marginBottom: 20,
            paddingLeft: 20,
            paddingRight: 10,
            paddingVertical: 10,
            backgroundColor: COLORS.white,
            borderWidth: 0.75,
            borderRadius: 20,
            borderColor: COLORS.text3,
          }}>
          <TextInput
            placeholder="Type or speak your order"
            style={[
              STYLES.textMedium,
              {flex: 1, padding: 0, margin: 0, marginRight: 10},
            ]}
          />
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="microphone-outline"
              size={24}
              color={COLORS.main2}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
