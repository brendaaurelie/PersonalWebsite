import React from 'react'

import { theme } from '../theme'
import { Grommet, Box, Card, Text } from 'grommet'
import { Instagram, Github, Mail } from 'grommet-icons'
import { useNavigate } from "react-router-dom";
import "./card_landing_orange.css";
const Card_landing = () =>
{

  let navigate = useNavigate();

  return (
    <Grommet full theme={theme}>
      <Box fill="vertical" overflow="hidden" align="center" flex="grow" background={{"color":"background-back","dark":false}} direction="column" responsive wrap={false} justify="center" pad="xsmall" gap="none" elevation="none" animation="slideDown">
        <Box align="center" justify="center" direction="row" pad={{"vertical":"small"}} gap="large" responsive wrap={false} elevation="none">
        <div className='small_cards'>
          <Instagram color="neutral!" size="35px" onClick={() => {navigate("/About")}} />
          </div>
          <div className='small_cards'>
          <Github color="neutral!" size="35px" onClick={() => {navigate("/About")}}/>
          </div>
           <div className='small_cards'>
          <Mail size="35px" color="neutral!" onClick={() => {navigate("/About")}}/>
          </div>
        </Box>
        <Card height="xsmall" width="medium" background={{"color":"white"}} hoverIndicator={{"opacity":"strong","dark":true,"color":"active-background"}} onClick={() => {navigate("/About")}} margin={{"top":"small"}}>
          <Text textAlign="start" weight="bold" margin={{"vertical":"medium","left":"medium"}} size="small">
            Notion
          </Text>
        </Card>
        <Card height="xsmall" width="medium" hoverIndicator={{"opacity":"strong","dark":true,"color":"active-background"}} onClick={() => {navigate("/About")}} background={{"color":"background-front","dark":false}}>
          <Text textAlign="start" size="small" weight="bold" margin={{"vertical":"medium","left":"medium"}}>
            Waktu Indonesia Coding
          </Text>
        </Card>
        <Card background={{"dark":true,"color":"neutral!"}} height="xsmall" width="medium" hoverIndicator={{"color":"active-background","dark":true,"opacity":"strong"}} onClick={() => {navigate("/About")}} border={{"color":"active","side":"bottom"}} gap="none">
          <Text size="small" weight="bold" margin={{"vertical":"medium","left":"medium"}} truncate={false} color="white">
            Resume + Courses

          </Text>
        </Card>
        <Box align="center" justify="center" direction="row" gap="large" pad="large">

          <div className='small_cards'>
          <Card width="xsmall" height="xsmall" background={{"image":"url(https://i.imgur.com/RLYFAxJ.png)"}} onClick={() => {navigate("/About")}}/>
          </div> 

          <div className='small_cards'>
           <Card width="xsmall" height="xsmall" background={{"image":"url(https://i.imgur.com/QBg2R29.png)"}} onClick={() => {navigate("/About")}} />
           </div> 

           <div className='small_cards'>
          <Card width="xsmall" height="xsmall"  background={{"image":"url(https://i.imgur.com/05BBoGe.jpeg)"}} onClick={() => {navigate("/About")}}/>
          </div> 
         
        </Box>
      </Box>
    </Grommet>
  )
}

export default Card_landing;

// return (
//   <Grommet full theme={theme}>
//   {/* <Box fill="vertical" overflow="auto" align="center" flex="grow" background={{"color":"active-text","dark":true}} direction="column" responsive={false} wrap={false}> */}
//     <Card background={{"dark":true,"color":"neutral!"}} height="xsmall" width="medium" hoverIndicator={{"color":"active-background","dark":true,"opacity":"strong"}} onClick={() => {navigate("/About")}} >
//       <Text size="small" weight="bold" margin={{"vertical":"medium","left":"medium"}} truncate={false} color="white">
//         Waktu Indonesia Coding

//       </Text>
//     </Card>

//     <Card background={{"dark":true,"color":"white"}} height="xsmall" width="medium" hoverIndicator={{"color":"active-background","dark":true,"opacity":"strong"}} onClick={() => {navigate("/About")}}>
//           <Text size="small" weight="bold" margin={{"vertical":"medium","left":"medium"}} truncate={false} color="background-front">
//             Notion
//           </Text>
//         </Card>

//         <Card background="#ebded4" height="xsmall" width="medium" hoverIndicator={{"color":"active-background","dark":true,"opacity":"strong"}} onClick={() => {navigate("/About")}}>
//           <Text size="small" weight="bold" margin={{"vertical":"medium","left":"medium"}} truncate={false}>
//             Resume + Courses

//           </Text>
//         </Card>
//   {/* </Box> */}

 
// </Grommet>
//   )