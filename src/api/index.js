import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }


    try {

        const { data:{conformed,recovered,deaths,lastUpdate} } = await axios.get(changeableUrl);        // before it was: const response = await axios.get(url);                                            
       
        //const modifiedData = { conformed, recovered, deaths, lastUpdate }

        //return modifiedData;
        return { conformed, recovered, deaths, lastUpdate } ;
            
    } catch (error) {
        console.log(error);
    }
}


export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
        const modifiedData = data.map((dailyData) => ({
            conformed: dailyData.conformed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData;

    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {

        const response = await axios.get(`${url}/countries`);
        // console.log(response);

        return response.data.countries.map((country) => country.name);



    } catch (error) {
        console.log(error);
    }
}