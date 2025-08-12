import React from 'react'
import UserNames from "./component/UserNames";
import OneHwUserInfo from './component/OneHwUserInfo';
import ProductDetials from './component/4&5-props (hwSolving)/ProductDetials';
import BookInfo from './component/4&5-props (hwSolving)/BookInfo';
import StudentProfile from './component/4&5-props (hwSolving)/StudentProfile';
import MovieDetails from './component/4&5-props (hwSolving)/MovieDetails';
import CarDetails from './component/4&5-props (hwSolving)/CarDetails';
import EmployeeInfo from './component/4&5-props (hwSolving)/EmployeeInfo';
import RecipeDetails from './component/4&5-props (hwSolving)/RecipeDetails';
import CourseInfo from './component/4&5-props (hwSolving)/CourseInfo';
import TravelDestination from './component/4&5-props (hwSolving)/TravelDestination';
import UserInfo from './component/usingDestructing/UserInfo';
import ProductDetail from './component/usingDestructing/ProductDetail';
import StudentProfiles from './component/usingDestructing/StudentProfiles';
import MovieDetail from './component/usingDestructing/MovieDetail';
const Details = {
  name : "Movie",
  movieDetails :{
movieName : "gabbarshing",
  director : "sagarparsad",
  releaseYear : 1999,
  },

};
const about = {
   movieDetails :{
movieName : "gabbarshing",
  director : "sagarparsad",
  releaseYear : 1999,
  },
  name:"sagar",
  nick : "saga",
};


const studentName = "sagar";
const grade = 12;
const school = "japan .com";

const productName = "Apple Watch";
const price = 200;
const inStock = false;
const App = () => {
  return (
    
    <div>
      <MovieDetail
     about = {about}
      ></MovieDetail>


      <StudentProfiles
      studentName = {studentName}
      grade = {grade}
      school = {school}

      ></StudentProfiles>



      Book
      <ProductDetail
      productName={productName}
      inStock={inStock }
      price={price}
      
      ></ProductDetail>
      <UserInfo
      name = "sagar"
      age={23}
      city={"Gaindakot"}
      ></UserInfo>
      

      <TravelDestination
      location = "mustang"
      country = "nepal"
      bestTimeToVisit = "april"

      ></TravelDestination>


      <CourseInfo
      name = "React beginner to beyond"
      instructor = "Mandip Dhakal"
      duration = {12}
      ></CourseInfo>


      <RecipeDetails
      recipe = "dal"
      cookingTime = {20}
      ingredients = "1 spoon of oil 1 cup of salt"


      ></RecipeDetails>



      <EmployeeInfo
      employeeName = "shankar"
      position = "CEO"
      department = "Moping and cleaning"
      
      ></EmployeeInfo>
      <CarDetails
      year = {2002}
      make = "honda"
      model = "civic TypeR"
      ></CarDetails>
      <MovieDetails
      movieName = "batMan"
      directed = "nikhil"
      release = "2004"
      
      ></MovieDetails>
      <StudentProfile
      studentName = "sagar"
      grade = "12th"
      school = "selfSchool"
      ></StudentProfile>

      <BookInfo
      title = "one Piece"
      author = "sagar"
      year = {2003}

      
      ></BookInfo>
      <ProductDetials
      productName = "AppleWatch"
      cost = {`$ ${300}`}
      inStock = {true}
      
      
      ></ProductDetials>


      <OneHwUserInfo
      name = "kripa"
      age = {24}
      city = "gaindakot"
      
      
      ></OneHwUserInfo>
 


     <UserNames 
     name = "sagar" 
     age = {23}
     city = "chitwan"

     
     
     ></UserNames>
    </div>
  );
};

export default App;
