import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AgencyType} from '../../types';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import {Image} from 'react-native';
import {
  agencyImg,
  photoInput,
  shoppingBag,
  shoppingBagFill,
  store,
  user,
} from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Text, TextInput} from 'react-native-paper';
import {ThemeTextInput} from '../../config/const';

const AgencyItem = ({agencyData}: {agencyData: AgencyType}) => {
  return (
    <View style={styles.agencyItem}>
      {/* Header */}
      <View style={[styles.agencyItemHeader]}>
        <View style={styles.agencyNameArea}>
          <Image style={{width: 16, height: 16}} source={store} />
          <Text variant="labelLarge" style={globalStyles.primaryColor}>
            {agencyData.name}
          </Text>
        </View>

        <TouchableOpacity>
          <Image style={{width: 28, height: 28}} source={shoppingBagFill} />
        </TouchableOpacity>
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
          <TouchableOpacity
            style={[globalStyles.bgPrimary, styles.agencyActionBtn]}>
            <Image style={styles.agencyActionBtnIcon} source={shoppingBag} />

            <Text variant="bodySmall" style={globalStyles.whiteColor}>
              Mua hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const NoteItem = () => {
  return (
    <View style={[styles.noteWrapped, styles.agencyWrapped]}>
      <Text variant="labelLarge">Ghi chú</Text>

      <TextInput
        mode="outlined"
        theme={ThemeTextInput}
        placeholder="Nhập nộ dung ghi chú"
      />
    </View>
  );
};

const ImageCheckinItem = () => {
  return (
    <View style={[styles.agencyWrapped, styles.imageCheckInWrapped]}>
      <Text variant="labelLarge">Hình ảnh check - in</Text>

      <View style={styles.imageCheckInBox}>
        <Image
          style={{width: '50%', height: 100}}
          resizeMode="contain"
          source={photoInput}
        />

        <Image
          style={{width: '50%', height: 100}}
          resizeMode="contain"
          source={photoInput}
        />
      </View>
    </View>
  );
};

const AgencyCheckinScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <AgencyItem
          agencyData={{
            id: 'agency-id',
            name: 'Agency Name',
            quantityOrders: 5,
            owner: {
              id: 'owner-id',
              name: 'Owner Name',
              address: 'Owner Address',
              phoneNumber: '123456789',
            },
          }}
        />

        <NoteItem />
        <ImageCheckinItem />
      </View>

      <View style={styles.checkinBtnArea}>
        <Button
          style={globalStyles.bgPrimary}
          icon="content-save-all-outline"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Lưu
        </Button>
      </View>
    </View>
  );
};

export default AgencyCheckinScreen;
