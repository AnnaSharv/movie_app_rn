import React from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

function NavHeader() {
  const navigation = useNavigation()
  return (
    <View style={styles.menuHeader}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <AntDesign name="menu-fold" size={30} color="black" />
        </Pressable>
        <Text style={styles.textHeader}>FilmWu</Text>
        <Feather name="bell" size={30} color="black" />
    </View>
  )
}

export default NavHeader

const styles = StyleSheet.create({
    menuHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#100e44',
        paddingVertical: 50,
    },
    textHeader: {
        fontFamily: 'Raleway-semibold',
        fontSize: 24,
        color: '#100e44'
    }
})