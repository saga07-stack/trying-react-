import AfterNoon from  "./AfternoonRoutine";
import Evening from "./EveningRoutine";
import Morning from "./MorningRoutine";
import React from 'react'

const DailyRoutine = () => {
  return (
    <div>
      <AfterNoon/>
      <Evening/>
      <Morning/>

    </div>
  );
};

export default DailyRoutine;

