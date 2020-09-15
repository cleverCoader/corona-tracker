import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {

        const { data} = await axios.get(url);        // before it was: const response = await axios.get(url);
                                                     
        const modifiedData = {
            conformed: data.conformed,                
            recovered: data.recovered,           
            deaths: data.deaths,                  
            lastUpdate: data.lastUpdate               

        }

        

        
    } catch (error) {
        
    }
}