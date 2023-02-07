import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Styles from '../utils/global';
interface Props {
  text: string;
  buttonText: string;
  onPress: (event: GestureResponderEvent) => void;
}
const BottomTextButton: React.FC<Props> = ({ text, buttonText, onPress }) => {
  return (
    <View className='pb-4 bg-white items-center'>
      <Text style={Styles.Light} className='bg-white'>
        {text}{' '}
        <TouchableNativeFeedback onPress={onPress}>
          <Text className='' style={[Styles.ColorGreen, Styles.SemiBold]}>
            {buttonText}
          </Text>
        </TouchableNativeFeedback>
      </Text>
    </View>
  );
};

export default BottomTextButton;
