import React, { useEffect, useState } from 'react';
import { fetchImages, fetchGenres } from "./fetch";
import { ActivityIndicator, StyleSheet, ScrollView, View } from 'react-native';
import MovieDisplay from './MovieDisplay';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async() => {
      try {
        const returnedGenres = await fetchGenres();
        const response = await fetchImages();
        setData(response.results);
        setGenres(returnedGenres.genres);
        setLoading(false);
      }
      catch (error) {console.error(error)}
    })();   
  }, []);

  

  return (
    <ScrollView style={{ flex:1 }}>
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
          <MovieDisplay data={data} genres={genres}/>)}
      </View>
    </ScrollView>
  );
};

export default App;