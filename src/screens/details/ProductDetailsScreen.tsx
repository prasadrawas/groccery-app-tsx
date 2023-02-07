import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { StarIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import CartModifierButton from '../../components/CartModifierButton';
import FeatureColumn from '../../components/FeatureColumn';
import ProceedButton from '../../components/ProceedButton';
import SimilarProducts from '../../components/SimilarProducts';
import Strings from '../../constants/Strings';
import Styles from '../../utils/global';
import Helper from '../../utils/helper';

interface Props {
  route: any;
}

const ProductDetailsScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;

  const items = useSelector((state: any) => state.cart.items);

  Helper.changeHeaderTitle('Product Details');

  const dummyData = {
    title: 'Chintoo Noodles',
    brand: 'Chintoo',
    description:
      'Peaches on branch with leaves and glasses with peach juice and limonad…',

    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  };

  return (
    <>
      <ScrollView className='bg-white'>
        {/* Product Image */}
        <Image
          source={{
            uri: dummyData.imgUrl,
          }}
          className='w-full h-[250px] bg-contain'
        />

        {/* Product hightlight */}
        <View className='flex-row items-center mr-6'>
          <View className='flex-1'>
            <Text
              className='text-lg text-gray-900 px-4 mt-10'
              style={Styles.SemiBold}>
              {dummyData.title}
            </Text>
            <View className='flex-row space-x-1'>
              <View className='flex-row space-x-1 px-4'>
                <Text className='text-xs' style={Styles.Light}>
                  Rating
                </Text>
                <StarIcon size={14} color='green' />
                <Text className='text-xs' style={Styles.ExtraLight}>
                  {dummyData.rating}
                </Text>
              </View>
            </View>
            <Text className='px-4 mt-1 text-[12px]' style={Styles.Light}>
              {dummyData.weight}
            </Text>
            <Text className='px-4 text-[13px]' style={Styles.Bold}>
              {Strings.inr} {dummyData.price}
            </Text>
          </View>
          <CartModifierButton id={id} />
        </View>

        {/* Product details */}

        <Text className='px-4 mt-5 text-lg text-gray-900' style={Styles.Bold}>
          Product details
        </Text>

        <FeatureColumn title='Description' value={dummyData.description} />
        <FeatureColumn title='Category' value={dummyData.category} />
        <FeatureColumn title='Brand' value={dummyData.brand} />
        <FeatureColumn title='Unit' value={dummyData.weight} />

        {/* Similar Products */}

        <View className='bg-gray-900 h-[0.2px] w-full mx-4 my-5'></View>

        <Text className='px-4 mt-2 text-lg text-gray-900' style={Styles.Bold}>
          Similar products
        </Text>

        <SimilarProducts />
      </ScrollView>
      {items.length > 0 ? (
        <ProceedButton onPress={() => {}} title='View cart' />
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductDetailsScreen;
