import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Styles from '../utils/global';

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  selected?: number;
  index: number;
}
const AddressCard: React.FC<Props> = ({ onPress, selected, index }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        className='px-4 bg-white rounded my-2 py-4 mx-4'
        style={[
          Styles.Card,
          { backgroundColor: index === selected ? '#bbb' : 'white' },
        ]}>
        <Text className='text-xs' style={Styles.SemiBold}>
          Prasad Rawas
        </Text>
        <Text className='text-xs' style={Styles.Light}>
          +91 7276974942
        </Text>
        <Text className='text-xs' style={Styles.Light}>
          Near grampanchayat pategaon, tq. paithan 431107
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default AddressCard;
