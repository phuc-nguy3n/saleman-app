/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView, Switch} from 'react-native';
import {avatar, ellipse} from '../../assets/images';
import {FontSizes, HomeConst, Colors} from '../../config/const';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

// import {useDispatch} from 'react-redux';
// import {clearUser} from '../../redux/slices/userSlice';
// import {logout} from '../../redux/slices/authSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const itemsTodo = HomeConst.toDo.items;
  const noticeText = HomeConst.toDo.notice;

  // const navigation: any = useNavigation();
  const user = useSelector((state: any) => state.user.userInfo);

  // const dispatch = useDispatch();

  // const handleLogout = async () => {
  //   dispatch(clearUser());
  //   dispatch(logout());
  //   await AsyncStorage.clear();
  //   navigation.replace('Login');
  // };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBox}>
        <Image style={styles.headerBackground} source={ellipse} />
        <View style={styles.headerContentBox}>
          <View>
            <Text
              style={{
                fontSize: FontSizes.medium,
                color: 'white',
              }}>
              Xin chào,
            </Text>
            <Text
              style={{
                fontSize: FontSizes.large,
                color: 'white',
                fontWeight: 500,
              }}>
              {user !== null ? user.name : ''}
            </Text>
          </View>

          <View>
            <Image style={styles.avatar} source={avatar} />
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.bodyScroll}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}>
        {/* Component 1 */}
        <View style={styles.toDoBox}>
          {/* Header */}
          <View style={styles.toDoHeader}>
            <View>
              <Text style={styles.title}>
                {isEnabled
                  ? HomeConst.toDo.title.progress
                  : HomeConst.toDo.title.needToDo}
              </Text>
            </View>

            <View>
              <Switch
                trackColor={{false: '#767577', true: Colors.second}}
                thumbColor={isEnabled ? Colors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          {/* Body */}
          <View style={styles.toDoItemBox}>
            {itemsTodo.map((item, index) => (
              <View key={index} style={{alignItems: 'center', width: '25%'}}>
                <View>
                  <Image style={{width: 16, height: 16}} source={item.icon} />
                </View>

                <Text style={{fontSize: FontSizes.small, fontWeight: 500}}>
                  {item.title}
                </Text>

                <View style={{alignItems: 'center', marginTop: 4}}>
                  <Text style={{fontSize: 18, fontWeight: 500}}>10</Text>
                  <Text style={{fontSize: 10, fontWeight: 300}}>
                    {item.unit}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Footer */}
          <View style={{padding: 8}}>
            <View
              style={{
                backgroundColor: Colors.bgError,
                padding: 8,
                borderRadius: 4,
                flexDirection: 'row',
                gap: 8,
                alignItems: 'center',
              }}>
              <Icon name="alert-circle" size={20} color={Colors.error} />
              <Text style={{fontSize: FontSizes.small, fontWeight: 400}}>
                {noticeText}
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 120}}></View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
