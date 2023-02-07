import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Styles from '../utils/global';

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const AppButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        className='p-4 rounded-xl mx-10 items-center justify-center'
        style={Styles.BgGreen}>
        <Text className='text-white text-xs' style={Styles.SemiBold}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default AppButton;
