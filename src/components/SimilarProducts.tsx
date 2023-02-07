import React from 'react';
import { Dimensions, View } from 'react-native';
import ProductCard from './ProductCard';

const SimilarProducts = () => {
  const dummyData = [
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

  const screenWidth = Dimensions.get('window').width;
  const columnWidth = screenWidth / 2;
  return (
    <View className='flex-row flex-wrap'>
      {dummyData.map((item) => (
        <View style={{ width: columnWidth }} key={item.id}>
          <ProductCard
            id={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            rating={item.rating}
            price={item.price}
            weight={item.weight}
            category={item.category}
          />
        </View>
      ))}
    </View>
  );
};

export default SimilarProducts;
