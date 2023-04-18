import { Grid, Typography } from "@mui/material";

function Games() {
    return (
      <>
        <Grid container direction={"column"} alignItems={"center"}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h2">
              Games List
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  }
  
  export default Games;
  