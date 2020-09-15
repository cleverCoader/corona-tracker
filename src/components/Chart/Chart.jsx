import React, {useState , useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'  // here i failed 50+ times as it gave error  but finally i got resolved after and hour

/*
i just from here 
https://www.npmjs.com/package/react-chartjs-2

and installed npm install --save chart.js aswell

if i would have watched a video of tutorial for 10 more sec i could have not encountered like this bcz he also got same error

hence Lesson.
 */



import styles from './Chart.module.css';
const Chart = () => {
    const [dailyData, setDailyData] = useState({});

    /*
    it is same as this in class based components
    state = {
         dailyData={}  // and then use this.setState()
     }
     */
    
    useEffect(() => {
        const fetchAPI =async () => {
            //const dailyData = await fetchDailyData();
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);

        fetchAPI();
        
    });

    const lineChart = (
        dailyData[0]
            ? (<Line
                data={{
                    labels: '',
                    datasets: [{}, {}],
                }}
            />) : null
    );

    
    return (
        <h1>Chart</h1>
    )
}

export default Chart;