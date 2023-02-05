import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function BottomNavigator({component1, component2}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={component1} />
      <Tab.Screen name="My Movies" component={component2} />
    </Tab.Navigator>
  )
}

export default BottomNavigator