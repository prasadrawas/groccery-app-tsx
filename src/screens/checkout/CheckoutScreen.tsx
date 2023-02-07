import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import AddressCard from '../../components/AddressCard';
import BillingCard from '../../components/BillingCard';
import ProceedButton from '../../components/ProceedButton';
import RowText from '../../components/RowText';
import Screens from '../../constants/Screens';
import Styles from '../../utils/global';
import Helper from '../../utils/helper';

const CheckoutScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  Helper.changeHeaderTitle('Checkout');
  return (
    <>
      <ScrollView className='h-full bg-white'>
        {/* Address details */}
        <Text className='px-4 pt-6 text-lg' style={Styles.SemiBold}>
          Address details
        </Text>
        <AddressCard index={-1} />

        {/* Billing details */}
        <Text className='px-4 pt-6 text-lg' style={Styles.SemiBold}>
          Billing details
        </Text>
        <BillingCard />

        {/* Delivery type */}

        <View className='mx-4 p-4 my-5 bg-white rounded-lg' style={Styles.Card}>
          <RowText
            title={'Payment mode'}
            value={`Cash on Delivery`}
            size={'xs'}
          />
        </View>
      </ScrollView>

      <ProceedButton
        title='Checkout'
        onPress={() => {
          navigation.navigate(Screens.OrderPlaced);
        }}
      />
    </>
  );
};

export default CheckoutScreen;
