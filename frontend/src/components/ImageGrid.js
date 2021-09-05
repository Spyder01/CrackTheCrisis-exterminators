import React from 'react';
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
}))


const ImageGrid = ()=>{ 
    const classes = useStyles ();

    return (
        <>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </>
    )
}

export default ImageGrid;