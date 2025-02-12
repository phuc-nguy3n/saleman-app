import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import globalStyles from '../styles/globalStyles';

type BreadcrumbItem = {
  label: string;
  navigation: () => void | null;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({items}) => {
  return (
    <View
      style={[
        globalStyles.bgWhite,
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 8,
          width: 'auto',
        },
      ]}>
      <TouchableOpacity
        onPress={items[0].navigation}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons name="grid-outline" size={16} color={Colors.primary} />
        <Text style={{color: Colors.primary, marginLeft: 5}}>
          {items[0].label}
        </Text>
      </TouchableOpacity>
      {items.slice(1).map((item, index) => (
        <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginHorizontal: 5, color: 'gray'}}>/</Text>
          <TouchableOpacity onPress={item.navigation}>
            <Text style={{color: Colors.primary}}>{item.label}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Breadcrumbs;
