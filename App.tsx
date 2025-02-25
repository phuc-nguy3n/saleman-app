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
import {PaperProvider} from 'react-native-paper';
import {customTheme} from './src/theme/customTheme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetProvider} from './src/provider/BottomSheetProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetProvider>
          <PaperProvider theme={customTheme}>
            <SafeAreaView style={styles.container}>
              <StatusBar backgroundColor={'black'} />
              <AppNavigation />
            </SafeAreaView>
          </PaperProvider>
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
