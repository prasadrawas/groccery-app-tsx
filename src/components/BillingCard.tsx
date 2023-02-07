import React from 'react';
import { View } from 'react-native';
import Strings from '../constants/Strings';
import Styles from '../utils/global';
import RowText from './RowText';

const BillingCard = () => {
  return (
    <View className='mx-4 p-4 my-5 bg-white rounded-lg' style={Styles.Card}>
      <RowText
        title={'Item total (Incl. taxes)'}
        value={`${Strings.inr} 143`}
        size={'xs'}
      />
      <RowText
        title={'Handling charge'}
        value={`${Strings.inr} 143`}
        size={'xs'}
      />
      <RowText title={'Delivery charge'} value={'FREE'} size={'xs'} />
      <RowText title={'Grand total'} value={`${Strings.inr} 143`} size={'lg'} />
    </View>
  );
};

export default BillingCard;
