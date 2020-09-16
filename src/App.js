import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// instead of 3 imports we can have only one like:

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';



class App extends React.Component {

  state = {

    data: {},
    country:'',
    
  }



  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });  

    // console.log(this.state.data);
    
  }
  
  handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData , country: country });

    console.log(fetchedData);
    console.log(country);
    //fetch the data
    //set the data
  }


  render() { 
    const { data , country} = this.state;


    return (
      <div className={styles.container} >
        <img className={styles.image} src={coronaImage} alt="covid-19" / >
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data= {data} country={country} />
          
        
        </div>
      
      );
  }
}
 
export default App;



