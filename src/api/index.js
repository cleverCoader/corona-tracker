import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {

        const { data:{conformed,recovered,deaths,lastUpdate} } = await axios.get(url);        // before it was: const response = await axios.get(url);                                            
       
        //const modifiedData = { conformed, recovered, deaths, lastUpdate }

        //return modifiedData;
        return { conformed, recovered, deaths, lastUpdate } ;
            
    } catch (error) {
        
    }
}


export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        
        const modifiedData = data.map((dailyData) => ({
            conformed: dailyData.conformed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData;

    } catch (error) {
        
    }
}