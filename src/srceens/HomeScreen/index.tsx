import React from 'react';

import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';

function HomeScreen() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );

  console.log('IS AUTH =================', isAuthenticated);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default HomeScreen;
