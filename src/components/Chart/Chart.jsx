import React, {useState , useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'  // here i failed 50+ times as it gave error  but finally i got resolved after an hour finally



import styles from './Chart.module.css';
const Chart = ( {data, country} ) => {
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
        
    },[]);

    const lineChart=[]
    // const lineChart = (
    //     dailyData.length
    //         ? (<Line
    //             data={{
    //                 labels: dailyData.map(({ date }) => date),
    //                 datasets: [{
    //                     data: dailyData.map(({ conformed }) => conformed),
    //                     label: 'Infected',
    //                     borderColor: '#3333ff',
    //                     fill: true,
    //                 }, {
    //                     data: dailyData.map(({ deaths }) => deaths),
    //                     label: 'Infected',
    //                     borderColor: 'rgba(255,0,0,0.5)',
    //                     fill: true,
    //                 }],
    //             }}
    //         />) : null
    // );

    const barChart = (
        data.conformed
            ? (
                <Bar
                    data={{
                        labels : ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'people',
                            backgroundColor: [
                                'rgba(0,0,255,0.5)',
                                'rgba(0,255,0,0.5)',
                                'rgba(255,0,0,0.5)'
                            ],
                            data:[data.conformed.value, data.recovered.value, data.deaths.value]
                        }]

                    }}
                    
                    options={{
                        legend: { display: false },
                        title:{display: true, text:`current state in ${country}`}
                    }}
                
                
                />
        ) : null
    )
    
    return (
        <div className={styles.cotainer} >
                {country ? barChart : lineChart }
        </div>
    )
}

export default Chart;