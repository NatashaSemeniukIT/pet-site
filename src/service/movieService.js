import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDBhYWNiYzQwNWNiMjM4ZjNhMzUzYjgyNDU2MDgyYSIsInN1YiI6IjYxMzBmMWMwMzU3YzAwMDA2NWE2NWU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fm4s126Cv2X7TpQE_YJEtTVISBPlohFb2BvFb0Zicj0'
  }
});

const airingToday = async () => await instance.get('/tv/airing_today');
const discoverMovie = async () => await instance.get('/discover/movie');
const upcomingMovie = async () => await instance.get('/movie/upcoming');
const nowPlaying = async () => await instance.get('/movie/now_playing');
const onTheAir = async () => await instance.get('/tv/on_the_air');
const popular = async () => await instance.get('/tv/popular');
const persons = async () => await instance.get('/person/popular');
const providers = async () => await instance.get('/watch/providers/movie');
const topRatedTv =  async () => await instance.get('/tv/top_rated');
const topRatedMovie = async () => await instance.get('/movie/top_rated');

export { 
  airingToday, 
  discoverMovie, 
  upcomingMovie, 
  nowPlaying, 
  onTheAir,
  popular,  
  persons, 
  providers,
  topRatedMovie, 
  topRatedTv, 
};
