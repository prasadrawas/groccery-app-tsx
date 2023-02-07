import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  ArrowLeftOnRectangleIcon,
  ClipboardDocumentIcon,
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';
import ListTile from '../../components/ListTile';
import Screens from '../../constants/Screens';
import Styles from '../../utils/global';
import Helper from '../../utils/helper';

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  Helper.changeHeaderTitle('Profile');
  return (
    <ScrollView className='bg-white'>
      {/* <Text style={Styles.SemiBold} className='px-4 mt-4 text-[25px]'>
        My account
      </Text> */}

      <View className='items-center mt-4'>
        <UserCircleIcon size={100} color={`black`} />
        <Text
          style={Styles.SemiBold}
          className='px-4 text-[15px] text-gray-700'>
          Prasad Rawas
        </Text>
        <Text
          style={Styles.ExtraLight}
          className='px-4 text-[10px] text-gray-700'>
          prasadrawas@gmail.com
        </Text>
      </View>

      {/* Your Information */}
      <Text
        style={Styles.SemiBold}
        className='px-4 text-[15px] mt-10 mb-4 text-gray-700'>
        Your information
      </Text>
      <ListTile
        icon={<ClipboardDocumentIcon color={'gray'} size={20} />}
        title='Your orders'
        onPress={() => {
          navigation.navigate(Screens.Orders);
        }}
      />
      <ListTile
        icon={<ShoppingCartIcon color={'gray'} size={20} />}
        title='Your cart'
        onPress={() => {
          navigation.navigate(Screens.Cart);
        }}
      />
      <ListTile
        icon={<HeartIcon color={'gray'} size={20} />}
        title='Favourites'
        onPress={() => {}}
      />
      <ListTile
        icon={<TrashIcon color={'gray'} size={20} />}
        title='Delete account'
        onPress={() => {}}
      />
      <ListTile
        icon={<ArrowLeftOnRectangleIcon color={'gray'} size={20} />}
        title='Logout'
        onPress={() => {}}
      />
    </ScrollView>
  );
};

export default ProfileScreen;
