import React from 'react'
import MovieDetail from "./component/usingDestructing/MovieDetail"
import CarDetail from './component/usingDestructing/CarDetail';
import EmployeeInfos from './component/usingDestructing/EmployeeInfos';
import RecipeDetail from './component/usingDestructing/RecipeDetail';
import CourseInfos from './component/usingDestructing/CourseInfos';
import TravelDestinations from './component/usingDestructing/TravelDestinations';

const location = "mustang";
const country = "Nepal";
const bestTimeTOVisit = "April to May"

const instructor = "Mandip Dhakal";
const duration = "4 weeks";
const courseName = "React beginner to full stack"
const year = "2019";
const make = "Honda";
const model = "NSX";

const recipeName = "chowmin";
const cookingTime = "10min";
const ingredients = "200g chop onion 500g noodels and slat oil etc "

const employeeName = "sagar";
const position = "CEO";
const department = "backEnd";


const movieName = "onePiece";
const director = "yoshiro";
const releaseYear = 2003;
const App = () => {
  return (
    <div>
      <TravelDestinations
      location={location}
      country={country}
      bestTimeToVisit={bestTimeTOVisit}
      ></TravelDestinations>
      <CourseInfos
      instructor={instructor}
      duration={duration}
      courseName={courseName}
      ></CourseInfos>
      <RecipeDetail
      recipeName={recipeName}
      cookingTime={cookingTime}
      ingredients={ingredients}
      ></RecipeDetail>


      <EmployeeInfos
      employeeName={employeeName}
      position={position}
      department={department}

      ></EmployeeInfos>


      <CarDetail
      year={year}
      model={model}
      make={make}
      
      
      ></CarDetail>



      <MovieDetail
      movieName={movieName}
      director={director}
      releaseYear={releaseYear}
      
      ></MovieDetail>
    </div>
  );
};
export default App;
