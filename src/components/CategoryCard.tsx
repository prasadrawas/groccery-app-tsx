import React from 'react';
import { Image, Text, TouchableNativeFeedback, View } from 'react-native';
import Styles from '../utils/global';

interface Props {
  title: string;
  imgUrl: string;
}

const CategoryCard: React.FC<Props> = ({ title, imgUrl }) => {
  return (
    <TouchableNativeFeedback onPress={() => {}}>
      <View
        className='rounded-lg items-center bg-white-200 p-2 mb-3 m-1 flex-1'
        style={Styles.Card}>
        <Text
          style={Styles.SemiBold}
          className='text-xs text-center opacity-80 pb-2'
          numberOfLines={1}>
          {title}
        </Text>
        <Image source={{ uri: imgUrl }} className='h-[80px] w-[80px] rounded' />
      </View>
    </TouchableNativeFeedback>
  );
};

export default CategoryCard;
