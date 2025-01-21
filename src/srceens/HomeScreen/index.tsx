/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {View, Text, Image, ScrollView, Switch} from 'react-native';

import styles from './styles';
import {avatar, ellipse} from '../../assets/images';
import {FontSizes, HomeConst, Colors} from '../../config/const';

function HomeScreen() {
  const itemsTodo = HomeConst.toDo.items;

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
                fontWeight: '500',
              }}>
              Nguyễn Trần Văn Hân Hoàng
            </Text>
          </View>

          <View>
            <Image style={styles.avatar} source={avatar} />
          </View>
        </View>
      </View>

      {/* Component 1 */}
      <ScrollView
        style={styles.bodyScroll}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}>
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
            {itemsTodo.map(item => (
              <View style={{alignItems: 'center'}}>
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
        </View>
        <View style={{paddingTop: 120}}></View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
