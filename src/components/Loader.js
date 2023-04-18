import { Grid, Typography } from "@mui/material";

const Loader = () => {
    return (
        <Grid container sx={{height: '100vh'}} direction={"column"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h4" component="h4">
                Loading...
            </Typography>
        </Grid>
    );
}

export default Loader;