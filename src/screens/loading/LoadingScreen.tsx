import React from 'react';
import { View } from 'react-native';
import Helper from '../../utils/helper';

const LoadingScreen = () => {
  Helper.hideHeader();
  return <View className='bg-white'></View>;
};

export default LoadingScreen;
