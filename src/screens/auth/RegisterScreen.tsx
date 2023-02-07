import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import {
  AtSymbolIcon,
  LockClosedIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import AppButton from '../../components/AppButton';
import BottomTextButton from '../../components/BottomTextButton';
import TextField from '../../components/TextFields';
import Screens from '../../constants/Screens';
import Styles from '../../utils/global';
import Helper from '../../utils/helper';

const RegisterScreen = () => {
  Helper.hideHeader();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <>
      <ScrollView className='bg-white'>
        {/* Image */}
        <Image
          source={require('../../../assets/images/signup_cover.png')}
          className='w-full h-[300px]'
          resizeMode='contain'
        />
        {/* Heading */}
        <Text
          style={Styles.SemiBold}
          className='text-[40px] px-4 mt-[20px] text-gray-700'>
          Sign Up
        </Text>
        <Text style={[Styles.Light]} className='text-[13px] px-4'>
          Enter details to get register with us.
        </Text>
        {/* Login form */}
        <View className='py-2' />
        <TextField
          icon={<AtSymbolIcon size={20} color={'gray'} />}
          placeholder='Email'
        />
        <TextField
          icon={<UserIcon size={20} color={'gray'} />}
          placeholder='Full name'
        />
        <TextField
          icon={<LockClosedIcon size={20} color={'gray'} />}
          placeholder='Password'
        />
        <View className='py-4' />
        <AppButton title={'Sign Up'} onPress={() => {}} />
      </ScrollView>
      <BottomTextButton
        text='Already registered ?'
        buttonText='Login here'
        onPress={() => {
          navigation.navigate(Screens.Login);
        }}
      />
    </>
  );
};

export default RegisterScreen;
