import { Grid, Typography, keyframes } from "@mui/material";
import { styled } from '@mui/material/styles';

const fade = (o1, o2) => keyframes`
    from { opacity: ${o1}; }
    to { opacity: ${o2}; }
`;

const rotate = (r1, r2) => keyframes`
    from { transform: rotate(${r1}); }
    to { transform: rotate(${r2}); }
`;

const Icon = styled('div')({
    position: 'absolute',
    bottom: '50%',
    transformOrigin: '50px 200px',
    width: 100,
    height: 140,
    color: 'darkslategray',
    backgroundColor: 'darkgray',
    padding: 3,
    borderRadius: 4,
});
  

const Loader = () => {
    return (
        <Grid container sx={{height: '100vh', animation: `${fade(0, 1)} 1s linear`}} direction={"column"} alignItems={"center"} justifyContent={"center"}>
            <Grid container direction={"row"} justifyContent={"center"}>
                <Icon sx={{animation: `${fade(0.5, 0)} 1s linear infinite, ${rotate('45deg', '90deg')} 1s linear infinite`}}/>
                <Icon sx={{animation: `${fade(1, 0.5)} 1s linear infinite, ${rotate('0deg', '45deg')} 1s linear infinite`}}/>
                <Icon sx={{animation: `${fade(0.5, 1)} 1s linear infinite, ${rotate('315deg', '360deg')} 1s linear infinite`}}/>
                <Icon sx={{animation: `${fade(0, 0.5)} 1s linear infinite, ${rotate('270deg', '315deg')} 1s linear infinite`}}/>
            </Grid>
            <Typography variant="h4" component="h4" sx={{ mt: 10 }}>
                Loading...
            </Typography>
        </Grid>
    );
}

export default Loader;