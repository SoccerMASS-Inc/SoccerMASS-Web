import Image from "next/image";
import SearchContainer from "../search";

import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { EndpointsIntroProps } from "interfaces/components/apihub.interface";

const EndpointsIntro = ({ showMenu }: EndpointsIntroProps) => (
  <Box margin="auto" p={1} sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      {showMenu ? <Grid item lg={3}></Grid> : null}
      <Grid item lg={9}>
        <Box>
          <Stack direction="row" alignItems="center" spacing={4} py={8} px={1}>
            {showMenu && (
              <Avatar sx={{ width: 100, height: 100 }}>
                <Image src="/images/layout/soccermass.webp" alt="SoccerMASS" width={100} height={100} />
              </Avatar>
            )}
            <Box maxWidth={540}>
              <Typography fontSize="1.5em" color="text.secondary">
                Unlimited Endpoints for your team
              </Typography>

              <Typography mb={1}>
                With our Football data and an infinite variety of APIs through our API Hub, discover a world of wonders in SoccerMASS.
              </Typography>

              <SearchContainer />
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default EndpointsIntro;
