import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import Styles from '../utils/global';
interface Props {
  icon: React.ReactNode;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}
const ListTile: React.FC<Props> = ({ icon, title, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View className='flex-row w-full items-center px-3 py-3'>
        <View className='flex-1 flex-row items-center space-x-3'>
          <View className='bg-gray-200 rounded-full h-[35px] w-[35px] items-center justify-center'>
            {icon}
          </View>
          <Text style={Styles.SemiBold} className='text-gray-800'>
            {title}
          </Text>
        </View>
        <ChevronRightIcon color={'gray'} size={20} />
      </View>
    </TouchableNativeFeedback>
  );
};

export default ListTile;
