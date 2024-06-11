import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import LoginScreen from '../../screens/LoginAndRegister/LoginScreen';
import RegisterScreen from '../../screens/LoginAndRegister/RegisterScreen';
import CoffeScreen from '../../screens/BottomTabBarScreen/CoffeScreen/CoffeScreen';
import Story from '../../screens/BottomTabBarScreen/CoffeScreen/Story';
import ProfileScreen from '../../screens/BottomTabBarScreen/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
    initialRouteName="SplashScreen"
    >
      <Stack.Screen 
      name="SplashScreen" 
      component={SplashScreen} 
      options={{
        headerShown: false
      }}
      />
     
      <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        headerShown: false
      }}
      />
     

      <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{
        headerShown: false
      }}
      />
     

      <Stack.Screen
      name="CoffeScreen"
      component={CoffeScreen}
      options={{
        headerShown: false
      }}
      />


      <Stack.Screen
      name="Story"
      component={Story}
      options={{
        headerShown: false
      }}
      />

      <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        headerShown: false
      }}
      />

    

    </Stack.Navigator>
  )
}

export default StackScreen

const styles = StyleSheet.create({})