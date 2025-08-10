import React from 'react'

import CourseInfo from './component/CourseInfo';

const courseName = "reactBasic";
const instructor = "mandip Dhakal";
const duration = "2hrs";

const App = () => {

  return (
    <div>
     < CourseInfo 
      courseName={courseName}
      instructor={instructor}
      duration={duration}
     
     
      />
     
     
     
    </div>
  );
};

export default App;
