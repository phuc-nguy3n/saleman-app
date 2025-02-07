/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppNavigation from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'black'} />
            <AppNavigation />
          </SafeAreaView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
