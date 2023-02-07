import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import BannerCarousel from '../../components/BannerCarousel';
import Categories from '../../components/Categories';
import HotProducts from '../../components/HotProducts';
import ProceedButton from '../../components/ProceedButton';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Screens from '../../constants/Screens';
import Strings from '../../constants/Strings';
import Styles from '../../utils/global';
import Helper from '../../utils/helper';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  Helper.hideHeader();
  const items = useSelector((state: any) => state.cart.items);

  return (
    <>
      <ScrollView className='bg-white'>
        {/* Appbar */}
        <View className='pt-10 flex-row px-2 items-center mx-2'>
          <View className='flex-1'>
            <Text className={`text-xl tracking-widest`} style={Styles.Bold}>
              blink
              <Text style={Styles.ColorGreen}>it</Text>
            </Text>
            <Text style={Styles.Light}>{Strings.tagline}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Screens.Profile);
            }}>
            <UserCircleIcon size={30} color={Colors.Green} />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View
          className={`flex-row items-center space-x-2 px-1 py-3 pl-2 mt-6 bg-gray-200 rounded-md mx-4 drop-shadow`}>
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput
            placeholder='Search here'
            className={`flex-1`}
            style={Styles.ExtraLight}
          />
        </View>

        {/* Greetings */}
        <Text className={`mx-4 my-5 text-2xl`} style={Styles.Bold}>
          Welcome <Text style={Styles.ColorGreen}>Prasad !</Text>
        </Text>

        {/* Carousel */}
        <BannerCarousel />

        {/* Categories */}
        <Text
          className={`font-['${Fonts.SemiBold}'] text-lg mx-4 py-4`}
          style={Styles.SemiBold}>
          Categories
        </Text>

        <Categories />

        {/* Hot products */}

        <Text
          className={`font-['${Fonts.SemiBold}'] text-lg mx-4 py-4 mt-10`}
          style={Styles.SemiBold}>
          Hot Products
        </Text>

        <HotProducts />
      </ScrollView>
      {items.length > 0 ? (
        <ProceedButton
          onPress={() => {
            navigation.navigate(Screens.Cart);
          }}
          title={'View cart'}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default HomeScreen;
