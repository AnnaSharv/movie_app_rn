import React from 'react'
import {Text, View, StyleSheet, Pressable, Dimensions, Image, FlatList} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import Button from './Button'


function PopularMovies() {
    const [movies, setMovies] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const url = "https://www.omdbapi.com/?apikey=7d8ece08&s=spider"

    React.useEffect(() => {
        setLoading(true)

        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            setMovies(result.Search)
            setLoading(false)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }, [])
 

    const Carditem = (itemProps) => {
    const data = itemProps.itemProps

    const btnStyle = {
        backgroundColor: '#93a8e4',
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderWidth: 0,
        fontSize: 10,
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        marginRight: 5,
        marginTop: 5
    }
      return (
        <View style={styles.cardItem}>
            <Image source={{uri: data.Poster}} style={styles.cardImage}/>

            <View>
                <Text style={styles.cardItemHeader}>{data.Title}</Text>
                <Text style={styles.mTop}>Year: {data.Year}</Text>
                <Text style={styles.mTop}>IMDB ID: {data.imdbID}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <FontAwesome name="star" size={25} color="#f6c548" />
                    <Text style={{marginLeft: 5}}>{(Math.random() * 10 + 1).toPrecision(3)}/10 IMDB</Text>
                </View>

                <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '80%'}}>
                    <Button btnStyle={btnStyle}>{data.Type}</Button>
                    <Button btnStyle={btnStyle}>Comedy</Button>
                    <Button btnStyle={btnStyle}>Sci-fi</Button>
                </View>

                
                <View style={[{flexDirection: 'row', alignItems: 'center'}, styles.mTop]}>
                    <AntDesign name="clockcircleo" size={15} color="black" />
                    <Text style={{fontSize: 10, marginLeft: 5}}>1h 30min</Text>
                </View>
                
            </View>
            
        </View>
      )
    }

  return (
    <View style={{flex:1}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10}}>
            <Text style={styles.textHeader}>Popular</Text>
            <Button>full list available on M plan</Button>
        </View>

        {loading && <Text>Loading ...</Text>}
        {movies.length > 0 &&
        <FlatList 
        data={movies}
        renderItem={({item}) => <Carditem itemProps={item}/>}
        keyExtractor={(item, index) =>  index}
        />
        }

       
       
       
    </View>
  )
}

export default PopularMovies

const styles = StyleSheet.create({
    textHeader: {
        fontFamily: 'Raleway-semibold',
        fontSize: 24,
        color: '#100e44',
        flexWrap: 'wrap',
    },
    cardItem: {
        marginTop: 20,
        flexDirection: 'row',
    },
    cardImage: {
        width: 150,
        height: 220,
        borderRadius: 8,
        marginRight: 15
    },
    cardItemHeader: {
        color:"#100e44",
        fontSize: 18,
        fontFamily:  'Raleway-semibold',
        marginBottom: 10,
        flexWrap: 'wrap',
        width: '80%'
    },
    mTop: {
        marginTop:5
    }
})