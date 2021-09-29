import React from "react";


import { makeStyles } from '@material-ui/core/styles';

import useWindowDimensions from './WindowSize';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },

}));

function EntryCard() {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();

    if (width >= 750) {
        return ( 
           <div>
<Paper className={classes.background}>
            <img src={bgImg} alt="The ultropia prototype" className={classes.backgroundimg}/>
          </Paper>
           </div>
        )
    }
    else {
        return ( 
           <div>

           </div>
        )
    }
        

  }
  
  export default EntryCard;
