import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { ChevronDoubleRightIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import Styles from '../utils/global';
interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}
const ProceedButton: React.FC<Props> = ({ title, onPress }) => {
  const items = useSelector((state: any) => state.cart.items);

  return (
    <View className='mb-2 bg-white'>
      <TouchableNativeFeedback
        onPress={onPress}
        className='absolute bottom-6 w-full z-50 rounded-lg bg-white'>
        <View
          className='mx-2 p-2 rounded-lg items-center flex-row'
          style={Styles.BgGreen}>
          <View className='flex-1'>
            <Text style={Styles.SemiBold} className='text-xs text-white'>
              {items.length} Items
            </Text>
            <Text style={Styles.Bold} className='text-md text-white'>
              ₹ 120
            </Text>
          </View>
          <View className='flex-row items-center space-x-1'>
            <Text style={Styles.SemiBold} className='text-xs text-white'>
              {title}
            </Text>
            <ChevronDoubleRightIcon color={'white'} size={16} />
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ProceedButton;
