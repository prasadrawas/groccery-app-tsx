import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { FlatList, View } from 'react-native';
import OrderCard from '../../components/OrderCard';
import Screens from '../../constants/Screens';
import Helper from '../../utils/helper';

const orders = [
  {
    id: '1',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '2',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '3',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '4',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '5',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '6',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '7',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '8',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '9',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
];

const MyOrders = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  Helper.changeHeaderTitle('My orders');

  return (
    <View className='h-full bg-white'>
      <FlatList
        data={orders}
        nestedScrollEnabled={true}
        renderItem={({ item }) => (
          <OrderCard
            id={item.id}
            title={item.title}
            price={item.price}
            weight={item.weight}
            imgUrl={item.imgUrl}
            category={item.category}
            rating={8}
            quantity={'8'}
            onPress={() => {
              navigation.navigate(Screens.OrderDetails);
            }}
          />
        )}
      />
    </View>
  );
};

export default MyOrders;
