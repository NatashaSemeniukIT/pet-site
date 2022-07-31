import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice( {
  name: "toolkit",
  initialState: {
    movies: {
      airingToday: [],
      discover: [],
      nowPlaying: [],
      upcoming: [],
      onTheAir: [],
      popular: [],
      persons: [],
      topRatedMovie: [],
      topRatedTv: [],
    },
  },
  reducers: {
    getAiringToday({movies}, {payload}) {
      movies.airingToday = payload.results;
    },
    getDiscoverMovie({movies}, {payload}) { 
      movies.discover = payload.results;
    },
    getNowPlaying({movies}, {payload}) {
      movies.nowPlaying = payload.results; 
    },
    getUpcomingMovie({movies}, {payload}) {
      movies.upcoming = payload.results;
    },
    getOnTheAir({movies}, {payload}) {
      movies.onTheAir = payload.results;
    },
    getPopularTV({movies}, {payload}) {
      movies.popular = payload.results;
    },
    getPersons({movies}, {payload}) {
      movies.persons = payload.results;
    },
    getTopRatedMovie({movies}, {payload}) {
      movies.topRatedMovie = payload.results;
    },
    getTopRatedTv({movies}, {payload}) {
      movies.topRatedTv = payload.results;
    },
  }
});

export default toolkitSlice.reducer;
export const { 
  changeBackground,
  getDiscoverMovie, 
  getUpcomingMovie, 
  getNowPlaying,
  getTopRatedMovie,
  getTopRatedTv,
  getPopularTV,
  getAiringToday,
  getOnTheAir,
  getPersons,
} = toolkitSlice.actions;
