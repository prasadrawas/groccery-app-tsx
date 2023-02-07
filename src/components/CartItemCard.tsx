import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Image, Text, TouchableNativeFeedback, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cartSlice';
import Strings from '../constants/Strings';
import Styles from '../utils/global';

interface Props {
  id: string;
  title: string;
  imgUrl: string;
  weight: string;
  price: number;
}

const CartItemCard: React.FC<Props> = ({
  id,
  title,
  imgUrl,
  weight,
  price,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedNumber, selectNumber] = useState(1);

  const dispatch = useDispatch();

  const removeProductFromCart = () => {
    dispatch(removeFromCart({ id: id }));
  };
  return (
    <View className='items-end pb-2'>
      <View className='flex-row px-4 pt-3 bg-white rounded  items-center'>
        <View className='flex-row flex-1 items-center space-x-3'>
          <Image
            source={{ uri: imgUrl }}
            className='h-[70px] w-[70px] rounded-lg'
          />
          <View className='flex-2'>
            <Text style={Styles.SemiBold} className='text-xs'>
              {title}
            </Text>
            <Text style={Styles.Light} className='text-xs'>
              {weight}
            </Text>
            <Text style={Styles.Light} className='text-xs'>
              {Strings.inr} {price}
            </Text>
          </View>
        </View>

        <View
          className='flex-row items-center rounded h-[35px]'
          style={{ borderColor: 'gray', borderWidth: 1 }}>
          <Text style={Styles.SemiBold} className='text-xs text-gray-600 pl-2'>
            {selectedNumber}
          </Text>
          <View className='w-[40px]'>
            <Picker
              selectedValue={selectedNumber}
              onValueChange={(itemValue) => selectNumber(itemValue)}>
              {numbers.map((item) => (
                <Picker.Item label={`${item}`} value={`${item}`} />
              ))}
            </Picker>
          </View>
        </View>
      </View>

      <View className='w-[80px] bg-red-500 rounded-lg p-2'>
        <TouchableNativeFeedback onPress={removeProductFromCart}>
          <Text
            className='text-white text-center text-xs'
            style={Styles.SemiBold}>
            Remove
          </Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default CartItemCard;
