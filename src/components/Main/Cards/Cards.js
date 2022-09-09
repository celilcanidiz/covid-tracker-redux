import React from 'react'
import { Col } from 'react-bootstrap'
import {Box, CardActions, Card, CardContent, Typography} from '@mui/material';
import { useSelector } from "react-redux";
import { itemsSelector, countrySelector, newitemsSelector } from "../../../redux/Slice/covidSlice";
import moment from "moment";
import {
    statusSelector
  } from "../../../redux/Slice/covidSlice";
  import { NumericFormat } from 'react-number-format';

function Cards() {
    const items = useSelector(itemsSelector);
    const newitems = useSelector(newitemsSelector);
  const country = useSelector(countrySelector);
  const status = useSelector(statusSelector);
  let UpdatedDate =
  moment(items?.lastUpdate).format("MMMM Do YYYY, h:mm:ss a") || "";
  
if (status === 'idle') {
    return(<h1>LOADING</h1>)
  }
  if (status === 'loading') {
    return(<h1>LOADING</h1>)
  }
  
  return (
<>
    <Col xs lg="6" xl="3" className='mt-3'>
    <Card sx={{ minWidth: 275 }}>
      <CardContent className='bluecolor'>
        <Typography variant="h5" gutterBottom>  
        Infected
        </Typography>
        <Typography variant="h5" component="div">
        <NumericFormat value={newitems ? newitems?.confirmed.value :items?.confirmed.value} displayType='text' thousandSeparator={true}/>
        </Typography>
        <Typography variant="h6">  
        Last Updated at:
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {UpdatedDate}
        </Typography>
        <Typography variant="body2">
          
          <br />
          Number of infect cases of COVID-19
        </Typography>
      </CardContent>
      <CardActions className='bluebgcolor'>
        
      </CardActions>
    </Card>
    </Col>
    <Col xs lg="6" xl="3" className='mt-3'>
    <Card sx={{ minWidth: 275 }}>
      <CardContent className='greencolor'>
        <Typography variant="h5" gutterBottom>
        Recovered
        </Typography>
        <Typography variant="h5" component="div">
        <NumericFormat value={newitems ? newitems?.recovered.value :items?.recovered.value} displayType='text' thousandSeparator={true}/>
        </Typography>
        <Typography variant="h6">  
        Last Updated at:
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {UpdatedDate}
        </Typography>
        <Typography variant="body2">
         <br />
         Number of recoveries from COVID-19
        </Typography>
      </CardContent>
      <CardActions className='greenbgcolor'>
        
      </CardActions>
    </Card>
    </Col>
    <Col xs lg="6" xl="3" className='mt-3'>
    <Card sx={{ minWidth: 275 }}>
      <CardContent className='redcolor'>
        <Typography variant="h5" gutterBottom>
        Deaths
        </Typography>
        <Typography variant="h5" component="div">
        <NumericFormat value={newitems ? newitems?.deaths.value :items?.deaths.value} displayType='text' thousandSeparator={true}/>
        </Typography>
        <Typography variant="h6">  
        Last Updated at:
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {UpdatedDate}
        </Typography>
        <Typography variant="body2">
          
          <br />
          Number of deaths caused by COVID-19
        </Typography>
      </CardContent>
      <CardActions className='redbgcolor'>
        
      </CardActions>
    </Card>
    </Col>
    <Col xs lg="6" xl="3" className='mt-3'>
    <Card sx={{ minWidth: 275 }}>
      <CardContent className='orangecolor'>
        <Typography variant="h5" gutterBottom>
          Active
        </Typography>
        <Typography variant="h5" component="div">
        <NumericFormat value={newitems ? (newitems?.confirmed.value - newitems?.recovered.value - newitems?.deaths.value ) :(items?.confirmed.value-items?.recovered.value-items?.deaths.value)} displayType='text' thousandSeparator={true}/>
        </Typography>
        <Typography variant="h6">  
        Last Updated at:
        </Typography>   
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {UpdatedDate}
        </Typography>
        <Typography variant="body2">

          <br />
          Number of active cases of COVID-19
        </Typography>
      </CardContent>
      <CardActions className='orangebgcolor'>
       
      </CardActions>
    </Card>
    </Col>
</>
  )
}

export default Cards