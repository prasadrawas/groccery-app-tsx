import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import BillingCard from '../../components/BillingCard';
import CartItemsList from '../../components/CartItemsList';
import ProceedButton from '../../components/ProceedButton';
import Screens from '../../constants/Screens';
import Styles from '../../utils/global';
import Helper from '../../utils/helper';

const CartScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const items = useSelector((state: any) => state.cart.items);
  Helper.changeHeaderTitle('Checkout');
  return (
    <View className='h-full bg-white'>
      {items.length > 0 ? (
        <>
          <ScrollView>
            <View>
              <Text className='text-lg px-4 pt-5' style={Styles.SemiBold}>
                Cart items
              </Text>
              <View>
                <CartItemsList />
              </View>
              <View>
                <BillingCard />
              </View>
            </View>
          </ScrollView>
          {items.length > 0 ? (
            <ProceedButton
              onPress={() => {
                navigation.navigate(Screens.SelectAddress);
              }}
              title={'Select address'}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <View className='h-full justify-center'>
          <Text className='text-center' style={Styles.Light}>
            No items to display
          </Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
