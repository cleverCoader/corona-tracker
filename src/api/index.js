import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {

        const response = await axios.get(url);

        const alternative = {
            conformed: response.data.conformed,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastUpdate: response.data.lastUpdate
        }


        
        const { data} = await axios.get(url);        // before it was: const response = await axios.get(url);
                                                     // response.data
        const modifiedData = {
            conformed: data.conformed,                // response.data.conformed
            recovered: data.recovered,                // response.data.recovered
            deaths: data.deaths,                      // response.data.deaths
            lastUpdate: data.lastUpdate               // response.data.lastUpdate

        }

        

        
    } catch (error) {
        
    }
}