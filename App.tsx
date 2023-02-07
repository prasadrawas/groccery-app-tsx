import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import Screens from './src/constants/Screens';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import CartScreen from './src/screens/cart/CartScreen';
import AddAddressScreen from './src/screens/checkout/AddAddressScreen';
import CheckoutScreen from './src/screens/checkout/CheckoutScreen';
import OrderPlacedScreen from './src/screens/checkout/OrderPlacedScreen';
import SelectAddressScreen from './src/screens/checkout/SelectAddressScreen';
import ProductDetailsScreen from './src/screens/details/ProductDetailsScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import LoadingScreen from './src/screens/loading/LoadingScreen';
import MyOrders from './src/screens/orders/MyOrders';
import OrderDetails from './src/screens/orders/OrderDetails';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import SplashScreen from './src/screens/splash/SplashScreen';
import { store } from './store';

const App = () => {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screens.Loading} component={LoadingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name={Screens.Splash} component={SplashScreen} />
            <Stack.Screen name={Screens.Login} component={LoginScreen} />
            <Stack.Screen name={Screens.Register} component={RegisterScreen} />
            <Stack.Screen name={Screens.Home} component={HomeScreen} />
            <Stack.Screen
              name={Screens.ProductDetails}
              component={ProductDetailsScreen}
            />
            <Stack.Screen name={Screens.Cart} component={CartScreen} />
            <Stack.Screen
              name={Screens.SelectAddress}
              component={SelectAddressScreen}
            />
            <Stack.Screen
              name={Screens.AddAddress}
              component={AddAddressScreen}
            />
            <Stack.Screen name={Screens.Checkout} component={CheckoutScreen} />
            <Stack.Screen
              name={Screens.OrderPlaced}
              component={OrderPlacedScreen}
            />
            <Stack.Screen name={Screens.Profile} component={ProfileScreen} />
            <Stack.Screen name={Screens.Orders} component={MyOrders} />
            <Stack.Screen
              name={Screens.OrderDetails}
              component={OrderDetails}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
};

export default App;
