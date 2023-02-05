import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import {Text, View, StyleSheet, Pressable, Dimensions, Image} from 'react-native'
import Button from './Button'


function StreamingNowMovies() {
    const width = Dimensions.get('window').width;
    const images = [
       "https://a-static.besthdwallpaper.com/spider-man-no-way-home-movie-poster-wallpaper-2400x1350-87555_50.jpg",
       "https://rukminim1.flixcart.com/image/416/416/jcc9ci80/poster/5/s/r/medium-pl-narnia-prince-caspian-images-chronicles-nice-uploadeda-original-imaetdv8r3hh34r7.jpeg?q=70",
       "https://w0.peakpx.com/wallpaper/593/742/HD-wallpaper-avatar-2-the-way-of-water-banner.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WGS8Sbq55g14vSraBG5o_0tklXOTu2X8Ug&usqp=CAU",
    ]
  return (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
            <Text style={styles.textHeader}>Now Showing</Text>
            <Button>See more</Button>
        </View>


          <View style={{ flex: 1 }}>
            <Carousel
                loop
                mode='parallax'
                width={width}
                height={200}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1500}
                renderItem={({ index }) => (
                    <View
                        style={{ flex: 1, justifyContent: 'center'}}>
                        <Image source={{uri: images[index]}} style={{width: "100%", height: "100%"}}/> 
                    </View>
                )}
            />
          </View>
       
       
    </View>
  )
}

export default StreamingNowMovies

const styles = StyleSheet.create({
    textHeader: {
        fontFamily: 'Raleway-semibold',
        fontSize: 24,
        color: '#100e44'
    }
})