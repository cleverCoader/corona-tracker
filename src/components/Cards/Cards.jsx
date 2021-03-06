import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

//new Date(lastUpdate).toDateString()
 
const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate } }) => {              //{ data : { confirmed, recovered, deaths, lastUpdate } }
   
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3}  className={ cx(styles.card, styles.infected) } >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={112034}      //conformed.value
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            9th septerber 2020                
                        </Typography>      
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}  className={ cx(styles.card, styles.recovered) } >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={2210293}      //recovered.value
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            9th september 2020 
                        </Typography>   
                        <Typography varient="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}  className={ cx(styles.card, styles.deaths) } >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={5869659}   //deaths.value
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            9th september 2020 
                        </Typography> 
                        <Typography varient="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;