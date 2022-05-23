import React from 'react'

import { theme } from '../theme'
import { Grommet, Box, Card, Text } from 'grommet'
import { Instagram, Github, Mail } from 'grommet-icons'
import { useNavigate } from "react-router-dom";
import "./card_landing_orange.css";
const Card_landing = () =>
{

  let navigate = useNavigate();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

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
        <Card height="xsmall" width="medium" background={{"color":"white"}} hoverIndicator={{"opacity":"strong","dark":true,"color":"active-background"}} onClick={() => openInNewTab('https://discreet-slipper-97e.notion.site/Personal-Website-6c3c2e13ca7f44d090cbcbde8307df60')} margin={{"top":"small"}}>
          <Text textAlign="start" weight="bold" margin={{"vertical":"medium","left":"medium"}} size="small">
            How I made this website
          </Text>
        </Card>
        <Card height="xsmall" width="medium" hoverIndicator={{"opacity":"strong","dark":true,"color":"active-background"}} onClick={() => openInNewTab('https://www.youtube.com/channel/UCqbKg3VGTwk81a7BhKNiHeA')} background={{"color":"background-front","dark":false}}>
          <Text textAlign="start" size="small" weight="bold" margin={{"vertical":"medium","left":"medium"}}>
            Waktu Indonesia Coding
          </Text>
        </Card>
        <Card background={{"dark":true,"color":"neutral!"}} height="xsmall" width="medium" hoverIndicator={{"color":"active-background","dark":true,"opacity":"strong"}} onClick={() => openInNewTab('https://discreet-slipper-97e.notion.site/Resume-Courses-Taken-9934a9d24de34e5ba42b9288e0bb32af') } border={{"color":"active","side":"bottom"}} gap="none">
          <Text size="small" weight="bold" margin={{"vertical":"medium","left":"medium"}} truncate={false} color="white">
            Resume + Courses
          </Text>
        </Card>
        <Box align="center" justify="center" direction="row" gap="large" pad="xsmall" margin={{"top":"medium"}}>
        <Box align="center" justify="center">
          <div className='small_cards'>
          <Card width="xsmall" height="xsmall" background={{"image":"url(https://i.imgur.com/RLYFAxJ.png)"}} onClick={() => {navigate("/About")}} margin={{"bottom":"small"}}/>
          </div> 
          <Text textAlign="center" weight="bold">
              About
            </Text>
            </Box>
          <Box align="center" justify="center" pad="xsmall">

          <div className='small_cards'>
           <Card width="xsmall" height="xsmall" background={{"image":"url(https://i.imgur.com/QBg2R29.png)"}} onClick={() => {navigate("/About")}} margin={{"bottom":"small"}}/>
           </div> 
           <Text textAlign="center" weight="bold">
              Project
            </Text>
          </Box>
          <Box align="center" justify="center">
           <div className='small_cards'>
          <Card width="xsmall" height="xsmall"  background={{"image":"url(https://i.imgur.com/05BBoGe.jpeg)"}} onClick={() => {navigate("/About")}} margin={{"bottom":"small"}} />
          </div> 
          <Text textAlign="center" weight="bold">
              Gallery
            </Text>
          </Box>
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