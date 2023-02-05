import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LandingPage from './screens/LandingPage';
import SaveList from './screens/SaveList';

//medium #8da3e3 dark #100e44 light #dce3fd grey #c1c1c1 yellow #f6c548



const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [movieList, setMovieList] = React.useState([])

  const [fontsLoaded] = useFonts({
    'Raleway-light': require('./assets/fonts/Raleway-ExtraLight.ttf'),
    'Raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-semibold': require('./assets/fonts/Raleway-SemiBold.ttf'),
  });

  function handleMovieList(movie) {
    setMovieList((prevVal) => [...prevVal, movie])
  }

  function displayMovies() {
    return movieList
  }


  if (!fontsLoaded) return null 

  // function StackScreen() {
  //   return (
  //     <Stack.Navigator >
  //       <Stack.Screen name="landing" component={LandingPage} options={{headerShown: false}}/>
  //       <Stack.Screen name="saveList" component={SaveList} />
  //     </Stack.Navigator>
  //   );
  // }

  const TabNavigator = () => {
   return <Tab.Navigator
    screenOptions={{
      tabBarLabelPosition:"beside-icon",
      tabBarActiveTintColor: '#8da3e3',
      tabBarInactiveTintColor: "#c1c1c1",
    }}
  >
    <Tab.Screen name="Home" component={LandingPage}
     initialParams={{ handleMovieList }}
     options={{
      headerShown:false,
      tabBarIcon: () => {  return <AntDesign name="home" size={24} color="#8da3e3" />  }         
    }}  
    />
    <Tab.Screen name="Savelist" component={SaveList} 
     initialParams={{ displayMovies }}
     options={{
      tabBarLabel: "My Movies",
      tabBarIcon: () => {  return <AntDesign name="save" size={24} color="#8da3e3" /> },
      tabBarBadge: movieList.length
    }}  
    />
 </Tab.Navigator>
  }
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
       
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#c6cbef',
            },
            drawerContentStyle: {
              paddingTop: 50,
              paddingHorizontal: 10
            }
          }}
        >
          <Drawer.Screen name="TabNav" component={TabNavigator} 
          options={{ 
            headerShown: false,
            drawerActiveTintColor: "white",
            drawerIcon : () => {
              return  <AntDesign name="home" size={24} color="#8da3e3" />
            }
          }} />

          <Drawer.Screen name="Savelist"  component={SaveList} 
            options={{
              drawerActiveTintColor: "white", 
              title: "Saved Movies",
              drawerIcon : () => {
                return <AntDesign name="save" size={24} color="#8da3e3" />
              }
            }}  />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Raleway-semibold',
    fontSize: 24,
    color: "#100e44"
  }
});
