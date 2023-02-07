import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import Screens from '../../constants/Screens';
import Strings from '../../constants/Strings';
import Styles from '../../utils/global';
import Helper from '../../utils/helper';

const SplashScreen = () => {
  Helper.hideHeader();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Screens.Login);
    }, 3000);
  }, []);

  return <Splash />;
};

const Splash = () => (
  <View
    className={`justify-center h-full w-full items-center`}
    style={Styles.BgYellow}>
    <Image
      source={require('../../../assets/images/img_splash.png')}
      className='w-52 h-52'
    />

    <Text className={`text-[40px] tracking-widest`} style={Styles.SemiBold}>
      blink<Text style={Styles.ColorGreen}>it</Text>
    </Text>
    <Text style={Styles.Light}>{Strings.tagline}</Text>
  </View>
);

export default SplashScreen;
