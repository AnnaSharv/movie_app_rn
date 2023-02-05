import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, Pressable} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import NavHeader from '../components/NavHeader';
import StreamingNowMovies from '../components/StreamingNowMovies';
import PopularMovies from '../components/PopularMovies';
import SearchBar from '../components/SearchBar';

function LandingPage({navigation, route}) {


  return (
    <LinearGradient colors={["#fff", "#dce3fd"]} style={[styles.container]}>
      <NavHeader />
      <SearchBar handleMovieList={route.params.handleMovieList}/>
      <StreamingNowMovies />
      <PopularMovies />
    </LinearGradient>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20    
    }
})