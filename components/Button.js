import React from 'react'

import {Text, View, StyleSheet} from 'react-native'

function Button({children, btnStyle}) {
  return (
    <View style={[styles.seeMoreBtn, btnStyle]}>
      <Text style={[styles.textHeaderSmall, btnStyle && {color: 'white'}]}>{children}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    textHeaderSmall: {
        fontFamily: 'Raleway-regular',
        fontSize: 12,
        color: '#c1c1c1',
    },
    seeMoreBtn: {
        borderRadius: 50,
        borderColor: '#c1c1c1',
        borderWidth: 0.5,
        paddingVertical: 7,
        paddingHorizontal: 20
    }
})