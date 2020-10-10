import { Ionicons,Entypo,FontAwesome,AntDesign} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';


import HomeScreen from '../screens/HomeScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import PerfilScreen from '../screens/PerfilScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="black" />,
        }}
      />
         <BottomTab.Screen
        name="Pesquisa"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color="black" />,
        }}
      />
         <BottomTab.Screen
        name="Pedidos"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="user" size={24} color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{ headerTitle: 'Perfil' }}
      />
    </TabTwoStack.Navigator>
  );
}
