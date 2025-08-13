import WeatherReports from "./component/withDestructure/WeatherReports";
import MovieInfo from "./component/withDestructure/MovieInfo";
import BookDetails from "./component/withDestructure/BookDetails";
import BlogPosts from "./component/withDestructure/BlogPosts"
import ProductCards from './component/withDestructure/ProductCards';
import React from 'react';
import BookDetail from "./component/BookDetail";
import MovieInfos from './component/MovieInfos';
import WeatherReport from './component/WeatherReport';
import EventDetail from './component/EventDetail';
import Carinfos from "./component/Carinfos";
import StudentInfos from './component/StudentInfos';
import MenuItem from './component/MenuItem';
import UserProfile from './component/withDestructure/UserPofile';
const user = {
  name: "Sita",
  age: 28,
  country: "Nepal",
};
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
const product = {
  id: 101,
  title: "Laptop",
  price: 45000,
};
const post = {
  title: "React Tips",
  author: "Mandip",
  date: "2025-08-09",
};
const App = () => {
  return (
    <div>
       <UserProfile
       user = {user} 
       ></UserProfile>
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
      <ProductCards
      product={product}
      ></ProductCards>
      <BlogPosts
      post = {post}
      ></BlogPosts>
      <BookDetails
      book={book}
      ></BookDetails>
      <MovieInfo
      movie = {movie}
      ></MovieInfo>
      <WeatherReports
      weather={weather}
      ></WeatherReports>
      <EventDetails
      event = {event}
      ></EventDetails>
    </div>
  );
};

export default App;
