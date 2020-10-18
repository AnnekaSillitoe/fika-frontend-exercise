export const fetchImages = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1');
  return data.json();
  }

export const fetchGenres = async () => {
  const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US');
  return data.json();
  }
