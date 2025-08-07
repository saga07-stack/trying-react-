import ProfileCard from "./components/Profile-card/ProfileCard";
import RecipeCard from "../RecipeCard/RecipeCard";
import BlogPost from "../BlogPost/BlogPost";
import UserImg from "./components/Profile-card/UserImg";
import ProductCard from "../ProductCase/ProductCard";
import DailyRoutine from "../daily Routine/DailyRoutine";
import QuoteBox from "../QuoteOfTheDay/QuoteBox";
import NavBar from "../SimpleNavBar/NavBar";
import WeatherCard from "../Weather Display/WeatherCard";
import MovieCard from "../Favorite Movie Card/MovieCard";
const App = () =>{
  return(
    <div>
  
   {/* <ProductCard/>
   <DailyRoutine/> */}
   <QuoteBox/>
   <NavBar/>
   <WeatherCard/>
   <MovieCard/>
    </div>
   
  );

};

export default App;