import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const MovieDisplay = ({ data, genres }) => {
  const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      flex: 1,
      alignSelf: 'center',
    },
    viewer: {
      flexDirection: 'row',
      width: '100%',
    },
    title: {
      paddingTop: 15,
      paddingBottom: 5,
      width: '90%',
      paddingLeft: 30,
      fontSize: 20,
    },
    box: {
      alignSelf: 'flex-start',
    },
    wrapper: {
      flexDirection: 'column',
      flex: 1,
    },
    genres: {
      borderColor: 'grey',
      borderRadius: 5,
      borderWidth: 1,
      padding: 8,
      margin: 5,
      fontSize: 15,
    }
  });

  return data.map((movie) => {
    const results = movie.genre_ids.map((id) => {
      return genres.find(element => id === element.id).name;
    })
    return (
      <>
        <Text
        style={ styles.title }
        >{movie.title}</Text>
        <View style={styles.viewer}>
          <Image
            style={ styles.image }
            resizeMode="contain"
            source={{uri: 'https://image.tmdb.org/t/p/w500' + `${movie.poster_path}` }}
          />
          <View style={styles.wrapper}>
            {results && results.map((result, i) => (
              <View key={i} style={styles.box}>
                <Text
                style={ styles.genres }>{result}</Text>
              </View>
            ))}
          </View>
        </View>
      </>
    )}
  );
};

export default MovieDisplay;