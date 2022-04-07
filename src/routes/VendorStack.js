import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  Home,
  VendorSettings,
  Notification,
  Favourite,
  CartTab,
  Account,
  Login,
  Register,
  Register2,
  vStoreCreation,
  vProfileCreation,
  vSetLocation,
  vForgotPassword,
  VendorProfile,
} from '../screens';
import {APP_ROUTES} from '../routes/router';
import {COLORS} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const VendorNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={APP_ROUTES.VendorProfile}
      >
      <Stack.Screen name={APP_ROUTES.VendorProfile} component={VendorProfile} />
      <Stack.Screen name={APP_ROUTES.BusinessEditor} component={vProfileCreation} />
      <Stack.Screen name={APP_ROUTES.MenuBuilder} component={vSetLocation} />
      <Stack.Screen name={APP_ROUTES.ReviewManagement} component={vStoreCreation} />
      <Stack.Screen name={APP_ROUTES.Orders} component={vStoreCreation} />
      <Stack.Screen name={APP_ROUTES.BusinessAnalytics} component={vProfileCreation} />
    </Stack.Navigator>
  );
};

const VendorAuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={APP_ROUTES.Login} component={Login} />
      <Stack.Screen name={APP_ROUTES.Register} component={Register} />
      <Stack.Screen name={APP_ROUTES.Register2} component={Register2} />
      <Stack.Screen name={APP_ROUTES.vStoreCreation} component={vStoreCreation} />
      <Stack.Screen name={APP_ROUTES.vProfileCreation} component={vProfileCreation} />
      <Stack.Screen name={APP_ROUTES.vSetLocation} component={vSetLocation} />
      <Stack.Screen name={APP_ROUTES.vForgotPassword} component={vForgotPassword} />
    </Stack.Navigator>
  );
};



const VendorDashboard = ({navigation}) => {
  return (
    
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.primary}
      inactiveColor={COLORS.darkGray}
      labelStyle={{fontSize: 12}}
      barStyle={{backgroundColor: COLORS.white, padding: 5}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="restaurant-menu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartTab}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="reorder" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={APP_ROUTES.VendorNavigation}
        component={VendorNavigation}
        options={{
          tabBarLabel: 'Vendor',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={APP_ROUTES.VendorSettings}
        component={VendorSettings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
};




const VendorStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={APP_ROUTES.VendorAuthStack} component={VendorAuthStack} />
      <Stack.Screen name={APP_ROUTES.VendorDashboard} component={VendorDashboard} />
    </Stack.Navigator>
  );
};

export default VendorStack;