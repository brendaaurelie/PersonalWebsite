import React from "react";
import Card_landing from "../../Components/card_landing_orange";
import Left_card from "../../Components/left_card/left_card";
import { Grommet, Box } from 'grommet'
import { theme } from "../../theme";
const Landing = () => {
return(
    //  <>
    // <Grommet full theme={theme}>
    // {/* <Box fill="vertical" overflow="hidden" align="center" flex="grow" background={{"color":"background-back","dark":false}} direction="row-responsive" responsive wrap={false} justify="center" gap="none" elevation="none" animation="slideDown"> */}
    //  <Left_card/>
     <Card_landing/>

    //  </Grommet>
    );
};

export default Landing;
