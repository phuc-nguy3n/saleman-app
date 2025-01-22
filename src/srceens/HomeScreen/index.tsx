/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import {
  View,
  Text,
  Image,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {avatar, ellipse} from '../../assets/images';
import {FontSizes, HomeConst, Colors} from '../../config/const';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import data from '../../db/mockData.json';
import styles from './styles';
import {UserType} from '../../types';
import {generateSalesAmount} from '../../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OrderItem from '../../components/OrderItem';

function HomeScreen() {
  const {toDo, store, order} = HomeConst;

  const itemsTodo = toDo.items;
  const noticeText = toDo.notice;
  const itemsStore = store.items;
  const itemsOrder = order.items;
  const missions = data.system.missions;
  const user: UserType = useSelector((state: any) => state.user.userInfo);

  const [isProcessWork, setIsProcessWork] = useState(false);
  const toggleSwitch = () => setIsProcessWork(previousState => !previousState);

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

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.avatar} source={avatar} />
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.bodyScroll}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}>
        <View style={{gap: 16}}>
          {/* Component 1 */}
          <View style={styles.toDoBox}>
            {/* Header */}
            <View style={styles.toDoHeader}>
              <View>
                <Text style={styles.title}>
                  {isProcessWork
                    ? HomeConst.toDo.title.progress
                    : HomeConst.toDo.title.needToDo}
                </Text>
              </View>

              <View>
                <Switch
                  trackColor={{false: '#767577', true: Colors.second}}
                  thumbColor={isProcessWork ? Colors.primary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isProcessWork}
                />
              </View>
            </View>

            {/* Body */}
            <View style={styles.toDoItemBox}>
              <View style={{alignItems: 'center', width: '25%'}}>
                <View>
                  <Image
                    style={{width: 16, height: 16}}
                    source={itemsTodo[0].icon}
                  />
                </View>

                <Text style={{fontSize: FontSizes.small, fontWeight: 500}}>
                  {itemsTodo[0].title}
                </Text>

                <View style={{alignItems: 'center', marginTop: 4}}>
                  <Text style={{fontSize: 18, fontWeight: 500}}>
                    {` ${
                      isProcessWork
                        ? user.todoList.storesToVisit +
                          '/' +
                          missions.storesToVisit
                        : missions.storesToVisit
                    } `}
                  </Text>
                  <Text style={{fontSize: 10, fontWeight: 300}}>
                    {itemsTodo[0].unit}
                  </Text>
                </View>
              </View>

              <View style={{alignItems: 'center', width: '25%'}}>
                <View>
                  <Image
                    style={{width: 16, height: 16}}
                    source={itemsTodo[1].icon}
                  />
                </View>

                <Text style={{fontSize: FontSizes.small, fontWeight: 500}}>
                  {itemsTodo[1].title}
                </Text>

                <View style={{alignItems: 'center', marginTop: 4}}>
                  <Text style={{fontSize: 18, fontWeight: 500}}>
                    {` ${
                      isProcessWork
                        ? generateSalesAmount(user.todoList.salesAmount) +
                          '/' +
                          generateSalesAmount(missions.salesAmount)
                        : generateSalesAmount(missions.salesAmount)
                    } `}
                  </Text>
                  <Text style={{fontSize: 10, fontWeight: 300}}>
                    {itemsTodo[1].unit}
                  </Text>
                </View>
              </View>

              <View style={{alignItems: 'center', width: '25%'}}>
                <View>
                  <Image
                    style={{width: 16, height: 16}}
                    source={itemsTodo[2].icon}
                  />
                </View>

                <Text style={{fontSize: FontSizes.small, fontWeight: 500}}>
                  {itemsTodo[2].title}
                </Text>

                <View style={{alignItems: 'center', marginTop: 4}}>
                  <Text style={{fontSize: 18, fontWeight: 500}}>
                    {` ${
                      isProcessWork
                        ? user.todoList.orderCount + '/' + missions.orderCount
                        : missions.orderCount
                    } `}
                  </Text>
                  <Text style={{fontSize: 10, fontWeight: 300}}>
                    {itemsTodo[2].unit}
                  </Text>
                </View>
              </View>

              <View style={{alignItems: 'center', width: '25%'}}>
                <View>
                  <Image
                    style={{width: 16, height: 16}}
                    source={itemsTodo[3].icon}
                  />
                </View>

                <Text style={{fontSize: FontSizes.small, fontWeight: 500}}>
                  {itemsTodo[3].title}
                </Text>

                <View style={{alignItems: 'center', marginTop: 4}}>
                  <Text style={{fontSize: 18, fontWeight: 500}}>
                    {` ${
                      isProcessWork
                        ? user.todoList.registeredAgents +
                          '/' +
                          missions.registeredAgents
                        : missions.registeredAgents
                    } `}
                  </Text>
                  <Text style={{fontSize: 10, fontWeight: 300}}>
                    {itemsTodo[3].unit}
                  </Text>
                </View>
              </View>
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

          {/* Component 2 */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              gap: 8,
            }}>
            {itemsStore.map((item, index) => (
              <View
                key={index}
                style={{
                  width: '50%',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  height: 110,
                }}>
                <Image style={{width: 50, height: 50}} source={item.img} />
                <Text
                  style={{
                    marginTop: 8,
                    fontWeight: 400,
                    fontSize: FontSizes.small,
                  }}>
                  {item.text}
                </Text>
              </View>
            ))}
          </View>

          {/* Component 3 */}
          <View style={styles.toDoBox}>
            <View style={styles.toDoHeader}>
              <Text style={styles.title}>Quản lý đơn hàng</Text>

              <View>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center', gap: 8}}
                  onPress={() => console.log('Chi tiết')}>
                  <Text
                    style={{color: Colors.primary, fontSize: FontSizes.small}}>
                    Chi tiết
                  </Text>
                  <FontAwesome
                    size={10}
                    color={Colors.primary}
                    name={'chevron-right'}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                paddingVertical: 14,
                paddingHorizontal: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => console.log('Trang', itemsOrder[0].text)}>
                <OrderItem
                  img={itemsOrder[0].img}
                  title={itemsOrder[0].text}
                  quantity={1200}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => console.log('Trang', itemsOrder[1].text)}>
                <OrderItem
                  img={itemsOrder[1].img}
                  title={itemsOrder[1].text}
                  quantity={45}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => console.log('Trang', itemsOrder[2].text)}>
                <OrderItem
                  img={itemsOrder[2].img}
                  title={itemsOrder[2].text}
                  quantity={4}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => console.log('Trang', itemsOrder[3].text)}>
                <OrderItem
                  img={itemsOrder[3].img}
                  title={itemsOrder[3].text}
                  quantity={4}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 120}}></View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
