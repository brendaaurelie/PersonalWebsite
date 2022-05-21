import React from 'react'
import { Grommet, Box, Card, Text } from 'grommet'
import { theme } from '../theme'

import { useNavigate } from "react-router-dom";

const Card_landing_orange = () =>
{

  let navigate = useNavigate();

    return (
      <Grommet full theme={theme}>
      <Box fill="vertical" overflow="auto" align="center" flex="grow" background={{"color":"active-text","dark":true}} direction="column" responsive={false} wrap={false}>
        <Card background={{"dark":true,"color":"neutral!"}} height="xsmall" width="medium" hoverIndicator={{"color":"active-background","dark":true,"opacity":"strong"}} onClick={() => {navigate("/About")}} >
          <Text size="small" weight="bold" margin={{"vertical":"medium","left":"medium"}} truncate={false} color="white">
            Waktu Indonesia Coding

          </Text>
        </Card>
      </Box>
    </Grommet>
      )
}

export default Card_landing_orange;