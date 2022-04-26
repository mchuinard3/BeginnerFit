import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

function ProgressBar() {
    const [percentage, setPercentage] = useState(0);
   
    useEffect(() => {
      setTimeout(() => {
        if (percentage < 100) {
          setPercentage(percentage + 1);
        }
      }, 50);
    }, [percentage]);

    // useEffect(() => {
    //     dispatch({ type: 'GET_WORKOUT_PROGRESS' });
    //   }, []);
   
    return (
      <div className="app">
       
        {/* <div style={{ width: 500, padding: 50, marginLeft: 500 }}> */}
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        {/* </div> */}
      </div>
    );
  }
   
  export default ProgressBar;