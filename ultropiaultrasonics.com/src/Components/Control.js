import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import GetInTouch from './GetInTouch';

import axios from 'axios'




export default function Control() {

  return (

    <ButtonGroup fullWidth variant="contained" color="secondary" orientation="vertical"  >
        <GetInTouch/>
        <Button href='https://www.linkedin.com/company/ultropia/' 
        // style={{fontSize:16}}
        >
          About us
        </Button>
    </ButtonGroup>
        
  );
}
