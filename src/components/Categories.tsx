import React from 'react';
import { Dimensions, View } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const dummyData = [
    {
      title: 'Vegetables & fruits',
      imgUrl:
        'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    },
    {
      title: 'Body care',
      imgUrl:
        'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    },
    {
      title: 'Oral care',
      imgUrl:
        'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    },
    {
      title: 'Snacks',
      imgUrl:
        'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    },
    {
      title: 'Coldrinks',
      imgUrl:
        'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    },
    {
      title: 'Buiscits & coockies',
      imgUrl:
        'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    },
    {
      title: 'Masale & Spices',
      imgUrl:
        'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    },
    {
      title: 'Hair care',
      imgUrl:
        'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    },
  ];
  const screenWidth = Dimensions.get('window').width;
  const columnWidth = screenWidth / 3;
  return (
    <View className='flex-row flex-wrap'>
      {dummyData.map((item) => (
        <View style={{ width: columnWidth }} key={item.title}>
          <CategoryCard title={item.title} imgUrl={item.imgUrl} />
        </View>
      ))}
    </View>
  );

  // return (
  //   <FlatList
  //     data={dummyData}
  //     nestedScrollEnabled={true}
  //     scrollEnabled={false}
  //     numColumns={3}
  //     renderItem={({ item }) => (
  //       <CategoryCard title={item.title} imgUrl={item.imgUrl} />
  //     )}
  //   />
  // );
};

export default Categories;
