import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {

        const { data:{conformed,recovered,deaths,lastUpdate} } = await axios.get(url);        // before it was: const response = await axios.get(url);
                                                     
        const modifiedData = {
            conformed,                
            recovered ,           
            deaths,                 
            lastUpdate,               

        }

        

        
    } catch (error) {
        
    }
}