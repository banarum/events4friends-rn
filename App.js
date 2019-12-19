/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <WebView
      source={{ uri: 'https://events4friends.ru' }}
      style={{ marginTop: getStatusBarHeight()}}
    />
    )
  }
}

export default App;
