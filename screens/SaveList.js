import React, {useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {Text, View, FlatList, StyleSheet} from 'react-native'

function SaveList({route}) {
  const list = route.params.displayMovies()

  useEffect(() => {
    console.log("anna", list)
  }, [])
 
  return (
    <LinearGradient colors={["#fff", "#dce3fd"]} style={[styles.container]}>
    <View>
      <Text>000</Text>
      {/* <FlatList 
        data={list}
        keyExtractor={(index) => index}
        renderItem={({item}) => {
          let {itemObject} = item
          return (
            <Text>{item[0].Title} xoxo {itemObject}</Text>
          )
        }}
      /> */}
    </View>
    </LinearGradient>
  )
}

export default SaveList

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20
  }
});