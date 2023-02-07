import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
class Helper {
  static hideHeader(): void {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);
  }

  static changeHeaderTitle(title: string): void {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        title: title,
      });
    }, []);
  }
}

export default Helper;
