import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Styles from '../utils/global';

interface Props {
  id: string;
  title: string;
  rating: number;
  price: number;
  weight: string;
  category: string;
  imgUrl: string;
  quantity: string;
  onPress: (event: GestureResponderEvent) => void;
}

const OrderCard: React.FC<Props> = ({
  title,
  price,
  category,
  imgUrl,
  quantity,
  onPress,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        className='flex-1 m-1 rounded-lg p-2 flex-row space-x-3'
        style={Styles.Card}>
        <View className='items-center'>
          <Image
            source={{ uri: imgUrl }}
            className='h-[80px] w-[80px] rounded-full items-center'
          />
        </View>
        <View className='space-y-2'>
          <Text className='text-gray-700' style={Styles.SemiBold}>
            {title}
          </Text>
          <Text style={Styles.Light} className='text-xs'>
            {category}
          </Text>
          <View className='flex-row space-x-1'>
            <Text className='text-xs text-m' style={Styles.ExtraLight}>
              Total items :{' '}
              <Text className='text-xs text-m mb-4' style={Styles.SemiBold}>
                {quantity}
              </Text>
            </Text>
          </View>
          <View className='flex-row space-x-1'>
            <Text className='text-xs text-m' style={Styles.ExtraLight}>
              Total price :{' '}
              <Text className='text-xs text-m mb-4' style={Styles.SemiBold}>
                ₹ {price}
              </Text>
            </Text>
          </View>

          <View className='flex-row space-x-1'>
            <Text className='text-xs text-m' style={Styles.ExtraLight}>
              Order status :{' '}
              <Text className='text-xs text-m mb-4' style={Styles.SemiBold}>
                Delivered
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default OrderCard;
