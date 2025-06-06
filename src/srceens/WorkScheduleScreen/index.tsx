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
import styles from './styles';
import data from '../../db/mockData.json';
import {AgencyType, ScreenType, WorkScheduleScreenProps} from '../../types';
import {customTheme} from '../../theme/customTheme';
import {useBottomSheet} from '../../provider/BottomSheetProvider';
import {useBottomBarFixed} from '../../provider/BottomBarFixed';

const {colors} = customTheme;

const AgencyItem = ({
  agencyData,
  navigateAgencyInfo,
}: {
  agencyData: AgencyType;
  navigateAgencyInfo: () => void;
}) => {
  const {openBottomSheet} = useBottomSheet();
  const {showBottomBarFixed} = useBottomBarFixed();

  const openBottomSheetCustom = () => {
    openBottomSheet(ScreenType.shopping, 'Mua hàng');
    showBottomBarFixed();
  };
  return (
    <View style={styles.agencyItem}>
      {/* Header */}
      <View style={[globalStyles.bgYellowLight, styles.agencyItemHeader]}>
        <View style={styles.agencyNameArea}>
          <Image style={{width: 16, height: 16}} source={store} />
          <Text variant="labelLarge" style={globalStyles.textSecondColor}>
            {agencyData.name}
          </Text>
        </View>

        <View style={[globalStyles.bgGreenLight, styles.quantityOrdersBox]}>
          <Text variant="labelMedium" style={globalStyles.greenColor}>
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
              <Text variant="bodySmall" numberOfLines={2} ellipsizeMode="tail">
                {agencyData.owner.name}
              </Text>
            </View>

            <View style={styles.agencyInfoContent}>
              <Ionicons size={16} name={'location-outline'} />
              <Text variant="bodySmall" numberOfLines={2} ellipsizeMode="tail">
                {agencyData.owner.address}
              </Text>
            </View>

            <View style={styles.agencyInfoContent}>
              <Ionicons size={16} name={'call-outline'} />
              <Text variant="bodySmall" numberOfLines={1} ellipsizeMode="tail">
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
              onPress={openBottomSheetCustom}
              style={[globalStyles.bgPrimary, styles.agencyActionBtn]}>
              <Image style={styles.agencyActionBtnIcon} source={shoppingBag} />

              <Text variant="bodySmall" style={globalStyles.whiteColor}>
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
                {borderColor: colors.primary, borderWidth: 1},
              ]}>
              <Image style={styles.agencyActionBtnIcon} source={markerPin} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const WorkScheduleScreen: React.FC<WorkScheduleScreenProps> = ({
  navigation,
}) => {
  const agencyData = data.agency;

  const navigateAgencyInfo = (info: AgencyType) => {
    navigation.navigate('AgencyInfo', {
      info: info,
    });
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.agencyWrapped}>
        <FlatList
          data={agencyData}
          renderItem={({item}) => (
            <AgencyItem
              agencyData={item}
              navigateAgencyInfo={() => navigateAgencyInfo(item)}
            />
          )}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={false}
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
