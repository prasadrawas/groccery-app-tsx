import React from 'react';
import { Text, View } from 'react-native';
import {
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import AppButton from '../../components/AppButton';
import TextField from '../../components/TextFields';
import Styles from '../../utils/global';
import Helper from '../../utils/helper';

const AddAddressScreen = () => {
  Helper.changeHeaderTitle('Add address');

  return (
    <View className='h-full bg-white pt-5'>
      {/* Form */}

      <Text className='text-lg px-4 mb-2' style={Styles.Bold}>
        Add new address
      </Text>

      <TextField
        icon={<UserIcon color={'gray'} size={20} />}
        placeholder='Full name'
      />

      <TextField
        icon={<DevicePhoneMobileIcon color={'gray'} size={20} />}
        placeholder='Phone number'
      />

      <TextField
        icon={<MapPinIcon color={'gray'} size={20} />}
        placeholder='City, area name etc'
      />
      <TextField
        icon={<BuildingLibraryIcon color={'gray'} size={20} />}
        placeholder='House name, road name etc.'
      />
      <View className='py-5' />
      <AppButton title={'Save address'} onPress={() => {}} />
    </View>
  );
};

export default AddAddressScreen;
