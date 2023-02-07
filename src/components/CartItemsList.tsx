import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Styles from '../utils/global';
import CartItemCard from './CartItemCard';

const CartItemsList = () => {
  const items = useSelector((state: any) => state.cart.items);
  const product = {
    id: '1',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  };
  return (
    <View className='bg-white p-1 rounded-xl m-3' style={Styles.Card}>
      <FlatList
        data={items}
        key={items.id}
        nestedScrollEnabled={true}
        ItemSeparatorComponent={itemSeperator}
        renderItem={({ item }) => (
          <CartItemCard
            id={item.id}
            title={product.title}
            price={product.price}
            weight={product.weight}
            imgUrl={product.imgUrl}
          />
        )}
      />
    </View>
  );
};

const itemSeperator = () => <View className='bg-gray-400 h-[0.3px]' />;

export default CartItemsList;
