import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet } from 'react-native';

function Screentemplate({children, headerPadding}) {
  return (
    <LinearGradient
        colors={["#fff", "#dce3fd"]}
        locations={[0.6, 1]}
        style={[{ flex: 1}, styles.container]}
      >
        {children}
    </LinearGradient>
  )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
     
        paddingHorizontal: 30
      },
})
export default Screentemplate