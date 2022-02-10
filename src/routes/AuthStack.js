import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  OnBoarding,
  SignIn,
  SignUp,
  SignUp2,
  ForgotPassword,
  Otp,
  Home,
  Login,
  Register,
  vMenuCreation,
  vProfileCreation,
} from '../screens';
import AppStack from './AppStack';
import AccountNavigation from '../routes/AppStack'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();




const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []);


  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'OnBoarding'}>

      <Stack.Screen name="AppStack" component={AccountNavigation} />

      <Stack.Screen name="OnBoarding" component={OnBoarding} />

      <Stack.Screen name="SignIn" component={SignIn} />

      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="Dashboard" component={Home} />

      <Stack.Screen name="SignUp2" component={SignUp2} />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      <Stack.Screen name="Otp" component={Otp} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
