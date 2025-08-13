import React from 'react'
import BookDetail from "./component/BookDetail"
import MovieInfos from './component/MovieInfos';
import WeatherReport from './component/WeatherReport';
import EventDetail from './component/EventDetail';
import Carinfos from "./component/Carinfos"
import StudentInfos from './component/StudentInfos';
import MenuItem from './component/MenuItem';
const movie = {
  name: "Inception",
  director: "Christopher Nolan",
  year: 2010,
};
const weather = {
  city: "Kathmandu",
  temperature: 24,
  condition: "Sunny",
};
const book = {
  title: "Learn JavaScript",
  author: "John Doe",
  pages: 320,
};
const event = {
  title: "Music Concert",
  location: "Pokhara",
  date: "2025-12-15",
};
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};
const student = {
  id: 1,
  name: "Ram",
  grade: "A+",
};
const menuItem = {
  name: "Dal Bhat",
  price: 150,
  isVegetarian: true,
};
const App = () => {
  return (
    <div>
      <MenuItem
      menu = {menuItem}
      ></MenuItem>
      <StudentInfos
      student = {student}
      ></StudentInfos>
      <Carinfos
      car = {car}
      ></Carinfos>
      <EventDetail
      event = {event}
      ></EventDetail>
      <WeatherReport
      weather = {weather}
      ></WeatherReport>
      <MovieInfos
      movies = {movie}
      ></MovieInfos>
      <BookDetail
      book = {book}
      ></BookDetail>
    </div>
  );
};

export default App;
