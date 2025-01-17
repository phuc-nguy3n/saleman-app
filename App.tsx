/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import LoginScreen from './src/srceens/LoginScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'black'} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <LoginScreen />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
