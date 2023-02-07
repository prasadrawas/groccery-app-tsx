import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../features/cartSlice';
import Styles from '../utils/global';

interface Props {
  id: string;
}

const CartModifierButton: React.FC<Props> = ({ id }) => {
  const item = useSelector((state: any) =>
    state.cart.items.filter((item: any) => item.id === id)
  );

  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addToCart({ id: id }));
  };
  const removeProductFromCart = () => {
    dispatch(removeFromCart({ id: id }));
  };

  const AddButton = (
    <TouchableNativeFeedback onPress={addProductToCart}>
      <View
        style={Styles.BgGreen}
        className='items-center rounded-lg py-2 px-6'>
        <Text className='text-xs text-white' style={Styles.Regular}>
          ADD
        </Text>
      </View>
    </TouchableNativeFeedback>
  );

  const RemoveButton = (
    <TouchableNativeFeedback onPress={removeProductFromCart}>
      <View style={Styles.BgRed} className='items-center rounded-lg py-2 px-6'>
        <Text className='text-xs text-white' style={Styles.Regular}>
          Remove
        </Text>
      </View>
    </TouchableNativeFeedback>
  );

  if (item.length > 0) {
    return RemoveButton;
  } else {
    return AddButton;
  }
};

export default CartModifierButton;
