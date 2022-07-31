// general
import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 

// components
import { Header } from '../components/layout/Header/Header';
import { Footer } from '../components/layout/Footer/Footer';
import { About } from '../components/AboutCard/About';

// pages
import { Home } from '../pages/Home/Home';
import { AiringToday } from '../pages/AiringToday';
import { AboutPerson } from '../pages/AboutPerson/AboutPerson';
import { NowPlaying } from '../pages/NowPlaying';
import { OnTheAir} from '../pages/OnTheAir';
import { PopularTv } from '../pages/PopularTv';
import { People } from '../pages/People';
import { PopularMovie } from '../pages/PopularMovie';
import { TopRatedMovie } from '../pages/TopRatedMovie';
import { TopRatedTv } from '../pages/TopRatedTv';
import { Upcoming } from '../pages/Upcoming';

// redux
import { 
  airingToday,
  discoverMovie, 
  nowPlaying,
  onTheAir,
  persons,
  popular,
  upcomingMovie, 
  topRatedTv, 
  topRatedMovie
} from '../service/movieService';

import { 
  getAiringToday, 
  getDiscoverMovie,
  getNowPlaying,
  getOnTheAir,
  getPersons,
  getPopularTV,
  getUpcomingMovie,
  getTopRatedMovie,
  getTopRatedTv, 
} from '../redux/toolkitSlice';

// styles
import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    airingToday().then(value => dispatch(getAiringToday(value.data)));
    discoverMovie().then(value => dispatch(getDiscoverMovie(value.data)));
    nowPlaying().then(value => dispatch(getNowPlaying(value.data)));
    onTheAir().then(value => dispatch(getOnTheAir(value.data)));
    persons().then(value => dispatch(getPersons(value.data)));
    popular().then(value => dispatch(getPopularTV(value.data)));
    upcomingMovie().then(value => dispatch(getUpcomingMovie(value.data)));
    topRatedMovie().then(value => dispatch(getTopRatedMovie(value.data)));
    topRatedTv().then(value => dispatch(getTopRatedTv(value.data)));
  });

  return (
    <div className={styles.App}> 
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='popular-movie' element={<PopularMovie />} /> 
        <Route path='now-playing' element={<NowPlaying />} />
        <Route path='upcoming' element={<Upcoming />} />
        <Route path='movie-top-rated' element={<TopRatedMovie />} />
        <Route path='popular' element={<PopularTv />} /> 
        <Route path='airing-today' element={<AiringToday />} />
        <Route path='on-the-air' element={<OnTheAir />} />
        <Route path='tv-top-rated' element={<TopRatedTv />} />
        <Route path='people' element={<People />} />

        <Route path='about/:id' element={<About />} />
        <Route path='person/:id' element={<AboutPerson />} />
      </Routes>
      <Footer />
    </div>
  )
}

export { App };
