import React, {useState, useEffect} from 'react'
import {Text, View, TextInput, StyleSheet, Pressable, FlatList} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

function SearchBar({handleMovieList}) {

    const [searchedMovies, setSearchedMovies] = useState([]);
    const [loading, setLoading] = React.useState(false);
  
    function SearchMovies(searchTerm) {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=7d8ece08&t=${searchTerm}`)
          .then((response) => response.json())
          .then((result) => {
            setSearchedMovies(result);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error:', error);
        });
    }
  
    function handleAddMovie(index) {
      setSearchedMovies((prevMovies) =>
        prevMovies.map((movie, i) => {
          if (i === index) {
            return { ...movie, isAdded: !movie.isAdded };
          }
          return movie;
        })
      );
    }

 
  
    return (
      <View style={styles.searchContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholder="Search Movie..."
            style={styles.textInput}
            onChangeText={(text) => SearchMovies(text)}
          />
        </View>
  
        <FlatList
          data={searchedMovies}
          renderItem={({ item, index }) => {
            console.log("xx", searchedMovies)
            return (
              <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{item.Title} test</Text>
                <Pressable
                    style={{borderRadius:8}}
                    android_ripple={{ color: 'green' }}
                    onPress={() => {
                        handleAddMovie(index)
                        handleMovieList(searchedMovies)
                    }}
                >
                  {item.isAdded ? (
                    <AntDesign name="checkcircle" size={24} color="green" />
                  ) : (
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  )}
                </Pressable>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
  

export default SearchBar

const styles = StyleSheet.create({
    searchContainer: {
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        paddingLeft:20,
        borderRadius: 8,
        borderColor: "#dce3fd",
        flex:1,
        marginRight: 5,
        fontFamily: 'Raleway-semibold'
    },
    pressableBtn: {
        backgroundColor: '#c1c1c1',
        width: '100%',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
})