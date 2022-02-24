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
  AppStack,
  UserOrVendor,
  vendorStack,

} from '../screens';

const Stack = createStackNavigator();


const UserStack = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'OnBoarding'}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="UserOrVendor" component={UserOrVendor} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AppStack" component={AppStack} />
      <Stack.Screen name="SignUp2" component={SignUp2} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Otp" component={Otp} />
    </Stack.Navigator>



  )
}

export default UserStack