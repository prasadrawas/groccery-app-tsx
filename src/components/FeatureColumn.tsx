import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../utils/global';
interface Props {
  title: string;
  value: string;
}
const FeatureColumn: React.FC<Props> = ({ title, value }) => {
  return (
    <View className='mb-2'>
      <Text className='px-4 mt-1 text-gray-800' style={Styles.Regular}>
        {title}
      </Text>
      <Text className='px-4 text-gray-900 text-xs' style={Styles.ExtraLight}>
        {value}
      </Text>
    </View>
  );
};

export default FeatureColumn;
