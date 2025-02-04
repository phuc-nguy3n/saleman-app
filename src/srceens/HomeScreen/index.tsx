/* eslint-disable react/self-closing-comp */

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
import {
  HomeScreenProps,
  OrderCateType,
  OrderStatusItemProps,
  TodoType,
  UserType,
} from '../../types';
import {generateOrderQuantity, generateSalesAmount} from '../../utils';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../../styles/globalStyles';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {toDo, store, order} = HomeConst;
  const itemsTodo = toDo.items;
  const noticeText = toDo.notice;
  const itemsStore = store.items;
  const itemsOrder = order.items;

  const missions = data.system.missions;

  const user: UserType = useSelector((state: any) => state.user.userInfo);

  const {orders} = user;

  const newOrders = orders.filter(order => order.status === 'new');
  const shippingOrders = orders.filter(order => order.status === 'shipping');
  const shippedOrders = orders.filter(order => order.status === 'shipped');
  const returnOrders = orders.filter(order => order.status === 'return');

  const [isProcessWork, setIsProcessWork] = useState(false);
  const toggleSwitch = () => setIsProcessWork(previousState => !previousState);

  const navigateOrderMgmt = (cate: string) => {
    navigation.navigate('OrderManagement', {
      cateOrders: cate,
      orders: orders,
    });
  };

  const navigateWorkSchedule = () => {
    navigation.navigate('WorkSchedule');
  };

  const generateProcessWork = (todo: string): string | undefined => {
    switch (todo) {
      case TodoType.visit:
        return isProcessWork
          ? user.todoList.storesToVisit + '/' + missions.storesToVisit
          : missions.storesToVisit;

      case TodoType.sale:
        return isProcessWork
          ? generateSalesAmount(user.todoList.salesAmount) +
              '/' +
              generateSalesAmount(missions.salesAmount)
          : generateSalesAmount(missions.salesAmount).toString();

      case TodoType.orderCount:
        return isProcessWork
          ? user.todoList.orderCount + '/' + missions.orderCount
          : missions.orderCount;

      case TodoType.register:
        return isProcessWork
          ? user.todoList.registeredAgents + '/' + missions.registeredAgents
          : missions.registeredAgents;

      default:
        return undefined;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBox}>
        <Image style={styles.headerBackground} source={ellipse} />
        <View style={styles.headerContentBox}>
          <View>
            <Text style={[globalStyles.fontMedium, globalStyles.whiteColor]}>
              Xin chào,
            </Text>
            <Text
              style={[
                globalStyles.fontLarge,
                globalStyles.whiteColor,
                globalStyles.fontWeightMedium,
              ]}>
              {user !== null ? user.name : 'Username'}
            </Text>
          </View>

          <View style={styles.avatarBox}>
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
          <View style={styles.wrapped}>
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
                  trackColor={{false: Colors.darkGray, true: Colors.second}}
                  thumbColor={isProcessWork ? Colors.primary : Colors.gray}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isProcessWork}
                />
              </View>
            </View>

            {/* Body */}
            <View style={styles.toDoItemWrapped}>
              <View style={styles.toDoItemBox}>
                <View>
                  <Image
                    style={styles.toDoItemIcon}
                    source={itemsTodo[0].icon}
                  />
                </View>

                <Text
                  style={[
                    globalStyles.fontSmall,
                    globalStyles.fontWeightMedium,
                  ]}>
                  {itemsTodo[0].title}
                </Text>

                <View style={styles.toDoItemContentBox}>
                  <Text style={styles.toDoItemText}>
                    {generateProcessWork(TodoType.visit)}
                  </Text>
                  <Text style={styles.toDoItemUnit}>{itemsTodo[0].unit}</Text>
                </View>
              </View>

              <View style={styles.toDoItemBox}>
                <View>
                  <Image
                    style={styles.toDoItemIcon}
                    source={itemsTodo[1].icon}
                  />
                </View>

                <Text
                  style={[
                    globalStyles.fontSmall,
                    globalStyles.fontWeightMedium,
                  ]}>
                  {itemsTodo[1].title}
                </Text>

                <View style={styles.toDoItemContentBox}>
                  <Text style={styles.toDoItemText}>
                    {generateProcessWork(TodoType.sale)}
                  </Text>
                  <Text style={styles.toDoItemUnit}>{itemsTodo[1].unit}</Text>
                </View>
              </View>

              <View style={styles.toDoItemBox}>
                <View>
                  <Image
                    style={styles.toDoItemIcon}
                    source={itemsTodo[2].icon}
                  />
                </View>

                <Text
                  style={[
                    globalStyles.fontSmall,
                    globalStyles.fontWeightMedium,
                  ]}>
                  {itemsTodo[2].title}
                </Text>

                <View style={styles.toDoItemContentBox}>
                  <Text style={styles.toDoItemText}>
                    {generateProcessWork(TodoType.orderCount)}
                  </Text>
                  <Text style={styles.toDoItemUnit}>{itemsTodo[2].unit}</Text>
                </View>
              </View>

              <View style={styles.toDoItemBox}>
                <View>
                  <Image
                    style={styles.toDoItemIcon}
                    source={itemsTodo[3].icon}
                  />
                </View>

                <Text
                  style={[
                    globalStyles.fontSmall,
                    globalStyles.fontWeightMedium,
                  ]}>
                  {itemsTodo[3].title}
                </Text>

                <View style={styles.toDoItemContentBox}>
                  <Text style={styles.toDoItemText}>
                    {generateProcessWork(TodoType.register)}
                  </Text>
                  <Text style={styles.toDoItemUnit}>{itemsTodo[3].unit}</Text>
                </View>
              </View>
            </View>

            {/* Footer */}
            <View style={{padding: 8}}>
              <View style={[globalStyles.bgError, styles.toDoItemFooterBox]}>
                <Icon name="alert-circle" size={20} color={Colors.error} />
                <Text
                  style={[
                    globalStyles.fontSmall,
                    globalStyles.fontWeightRegular,
                  ]}>
                  {noticeText}
                </Text>
              </View>
            </View>
          </View>

          {/* Component 2 */}
          <View style={styles.actionWrapped}>
            {itemsStore.map((item, index) => (
              <TouchableOpacity
                onPress={navigateWorkSchedule}
                key={index}
                style={styles.actionBox}>
                <Image style={styles.actionImg} source={item.img} />
                <Text
                  style={[
                    globalStyles.fontWeightRegular,
                    globalStyles.fontSmall,
                    styles.actionText,
                  ]}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Component 3 */}
          <View style={styles.wrapped}>
            <View style={styles.toDoHeader}>
              <Text style={styles.title}>Quản lý đơn hàng</Text>

              <TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center', gap: 8}}
                  onPress={() => navigateOrderMgmt(OrderCateType.new)}>
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
              </TouchableOpacity>
            </View>

            <View style={styles.orderStatusWrapped}>
              <TouchableOpacity
                style={styles.orderStatusBox}
                onPress={() => navigateOrderMgmt(OrderCateType.new)}>
                <OrderStatusItem
                  img={itemsOrder[0].img}
                  title={itemsOrder[0].text}
                  quantity={newOrders.length}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.orderStatusBox}
                onPress={() => navigateOrderMgmt(OrderCateType.shipping)}>
                <OrderStatusItem
                  img={itemsOrder[1].img}
                  title={itemsOrder[1].text}
                  quantity={shippingOrders.length}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.orderStatusBox}
                onPress={() => navigateOrderMgmt(OrderCateType.shipped)}>
                <OrderStatusItem
                  img={itemsOrder[2].img}
                  title={itemsOrder[2].text}
                  quantity={shippedOrders.length}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.orderStatusBox}
                onPress={() => navigateOrderMgmt(OrderCateType.return)}>
                <OrderStatusItem
                  img={itemsOrder[3].img}
                  title={itemsOrder[3].text}
                  quantity={returnOrders.length}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 120}}></View>
      </ScrollView>
    </View>
  );
};

const OrderStatusItem = ({img, title, quantity}: OrderStatusItemProps) => {
  return (
    <View style={styles.orderStatusItem}>
      <View style={styles.orderQuantityDot}>
        <Text style={styles.orderQuantityText}>
          {generateOrderQuantity(quantity)}
        </Text>
      </View>

      <Image style={styles.orderStatusImg} source={img} />
      <Text style={[globalStyles.fontWeightLight, globalStyles.fontSmall]}>
        {title}
      </Text>
    </View>
  );
};

export default HomeScreen;
