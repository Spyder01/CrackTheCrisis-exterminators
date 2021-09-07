import React, {useState, useEffect} from 'react';
import {Card, CardHeader, CardContent} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import API from '../utils/serverURI'

import './styles/Jobs.css';

const useStyles = makeStyles((theme)=>({
    root: {
        width: "80vw",
        display: "flex",
        flexDirection : "column",
        textAlign: "left",
        justifyContent: "space-between",
        marginBottom: "5vh" 
    },
    place: {
        display: "flex",
        justifyContent: "flex-start",
    },
    Row: {
        display: "flex",
        justifyContent: "space-between",

    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
    },
    caption: {
        color: "grey"
    },
    Link: {

    }

}))


const Jobs = ()=>{
    const [jobs, setJobs] = useState ([]);

    useEffect(()=>{
        fetch(`${API}/jobs/intern`).then(res=>res.json().then(jobs=>{
            setJobs(jobs)
        }))
    }, [])

    return (
        <div className="JobsContainer">
             <h1>Current Internships</h1>
            {
                jobs.map(job=><Carder {...job} /> )
            }
        </div>
    )
}

export default Jobs;


const Carder = (props)=>{
    const classes = useStyles ();
    return (
        <Card className={classes.root}>
            <CardHeader title={props.position} subtitle={props.company} />

           <CardContent className={classes.content}>
              <div className={classes.place}>
                    <LocationOnIcon /> {props.place}
              </div>
              <div className={classes.Row}>
                  <div className={classes.wrapper}>
                    <div className={classes.caption}>
                        Stipend
                    </div>
                    <div className={classes.result}>
                        {`Rs. ${props.stipend}`}
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    <div className={classes.caption}>
                        Apply By
                    </div>
                    <div className={classes.result}>
                        {props.apply_by}
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    <div className={classes.caption}>
                        Start Date
                    </div>
                    <div className={classes.result}>
                        {props.startDate}
                    </div>
                  </div>
                  <div className={classes.wrapper}>
                    <a className={classes.Link} href={props.link}>
                        View Details
                    </a>
                  </div>
             </div>  
           </CardContent> 
            
        </Card>
    )
}