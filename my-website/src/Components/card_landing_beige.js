import React from 'react'
import { Grommet, Box, Card, Text } from 'grommet'
import { theme } from '../theme'
import { useNavigate } from "react-router-dom";
const card_landing_beige = () =>
{
    return (
        <Grommet full theme={theme}>
          <Box fill="vertical" overflow="auto" align="center" flex="grow">
            <Card background={{"dark":true,"color":"neutral!"}} height="xsmall" width="medium">
              <Text size="small" weight="bold" margin={{"vertical":"medium","left":"medium"}} truncate={false}>
                Resume + Courses
    
              </Text>
            </Card>
          </Box>
        </Grommet>
      )
}

export default card_landing_beige;