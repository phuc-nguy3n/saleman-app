import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import globalStyles from '../../styles/globalStyles';
import {
  agencyImg,
  markerPin,
  shoppingBag,
  store,
  user,
} from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../config/const';
import styles from './styles';
import data from '../../db/mockData.json';
import {AgencyType, WorkScheduleProps} from '../../types';

const AgencyItem = ({
  agencyData,
  navigateAgencyInfo,
}: {
  agencyData: AgencyType;
  navigateAgencyInfo: () => void;
}) => {
  return (
    <View style={styles.agencyItem}>
      {/* Header */}
      <View style={[globalStyles.bgYellowLight, styles.agencyItemHeader]}>
        <View style={styles.agencyNameArea}>
          <Image style={{width: 16, height: 16}} source={store} />
          <Text
            style={[
              globalStyles.textSecondColor,
              globalStyles.fontWeightMedium,
              {fontSize: 14},
            ]}>
            {agencyData.name}
          </Text>
        </View>

        <View style={[globalStyles.bgGreenLight, styles.quantityOrdersBox]}>
          <Text
            style={[
              globalStyles.fontSmall,
              globalStyles.fontWeightMedium,
              globalStyles.greenColor,
            ]}>
            Có {agencyData.quantityOrders} đơn hàng
          </Text>
        </View>
      </View>

      {/* Body */}
      <View style={[globalStyles.bgWhite, styles.agencyItemBody]}>
        {/* Info */}
        <View style={styles.agencyInfoWrapped}>
          <Image
            style={{width: 91, height: 91}}
            resizeMode="cover"
            source={agencyImg}
          />

          <View style={styles.agencyInfoArea}>
            <View style={styles.agencyInfoContent}>
              <Image style={{width: 16, height: 16}} source={user} />
              <Text
                style={[globalStyles.fontWeightRegular, styles.lineHeightText]}
                numberOfLines={2}
                ellipsizeMode="tail">
                {agencyData.owner.name}
              </Text>
            </View>

            <View style={styles.agencyInfoContent}>
              <Ionicons size={16} name={'location-outline'} />
              <Text
                style={[globalStyles.fontWeightRegular, styles.lineHeightText]}
                numberOfLines={2}
                ellipsizeMode="tail">
                {agencyData.owner.address}
              </Text>
            </View>

            <View style={styles.agencyInfoContent}>
              <Ionicons size={16} name={'call-outline'} />
              <Text
                style={[globalStyles.fontWeightRegular, styles.lineHeightText]}
                numberOfLines={1}
                ellipsizeMode="tail">
                {agencyData.owner.phoneNumber}
              </Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.agencyActionWrapped}>
          <View
            style={{
              width: '65%',
            }}>
            <TouchableOpacity
              style={[globalStyles.bgPrimary, styles.agencyActionBtn]}>
              <Image style={styles.agencyActionBtnIcon} source={shoppingBag} />

              <Text style={[globalStyles.whiteColor, globalStyles.fontSmall]}>
                Mua hàng
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '35%',
            }}>
            <TouchableOpacity
              onPress={navigateAgencyInfo}
              style={[
                styles.agencyActionBtn,
                {borderColor: Colors.primary, borderWidth: 1},
              ]}>
              <Image style={styles.agencyActionBtnIcon} source={markerPin} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const WorkScheduleScreen: React.FC<WorkScheduleProps> = ({navigation}) => {
  const agencyData = data.agency;

  const navigateAgencyInfo = () => {
    navigation.navigate('AgencyInfo');
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.agencyWrapped}>
        <FlatList
          data={agencyData}
          renderItem={({item}) => (
            <AgencyItem
              agencyData={item}
              navigateAgencyInfo={navigateAgencyInfo}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity
          style={[
            styles.agencyActionBtn,
            globalStyles.bgPrimary,
            {padding: 12, borderRadius: 50, width: 64, height: 64},
          ]}>
          <Ionicons size={28} name={'map-outline'} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkScheduleScreen;
