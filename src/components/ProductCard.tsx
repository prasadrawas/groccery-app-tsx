import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, TouchableNativeFeedback, View } from 'react-native';
import { StarIcon } from 'react-native-heroicons/outline';
import Screens from '../constants/Screens';
import Styles from '../utils/global';
import CartModifierButton from './CartModifierButton';
interface Props {
  id: string;
  title: string;
  rating: number;
  price: number;
  weight: string;
  category: string;
  imgUrl: string;
}
const ProductCard: React.FC<Props> = ({
  id,
  title,
  rating,
  weight,
  price,
  category,
  imgUrl,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigateToProductDetailsScreen = () => {
    navigation.navigate(Screens.ProductDetails, { id: id });
  };

  return (
    <TouchableNativeFeedback onPress={navigateToProductDetailsScreen}>
      <View className='flex-1 m-1 rounded-lg p-2' style={Styles.Card}>
        <View className='items-center'>
          <Image
            source={{ uri: imgUrl }}
            className='h-[80px] w-[80px] rounded items-center'
          />
        </View>
        <Text className='text-gray-700' style={Styles.SemiBold}>
          {title}
        </Text>
        <Text style={Styles.Light} className='text-xs'>
          {category}
        </Text>
        <View className='flex-row space-x-1'>
          <View className='flex-row space-x-1'>
            <StarIcon size={14} color='green' />
            <Text className='text-xs text-m' style={Styles.ExtraLight}>
              {rating}
            </Text>
          </View>
          <Text className='text-xs text-m' style={Styles.ExtraLight}>
            |
          </Text>
          <Text className='text-xs text-m' style={Styles.Regular}>
            {weight}
          </Text>
        </View>

        <Text className='text-xs text-m mb-4' style={Styles.SemiBold}>
          ₹ {price}
        </Text>

        <CartModifierButton id={id} />
      </View>
    </TouchableNativeFeedback>
  );
};

export default ProductCard;
