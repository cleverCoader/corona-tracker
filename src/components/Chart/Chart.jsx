import React, {useState , useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2'  // here i failed 50+ times as it gave error  but finally i got resolved after an hour finally



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
        dailyData.length
            ? (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ conformed }) => conformed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Infected',
                        borderColor: 'rgba(255,0,0,0.5)',
                        fill: true,
                    }],
                }}
            />) : null
    );

    
    return (
        <div className={styles.cotainer} >
                {lineChart}
        </div>
    )
}

export default Chart;