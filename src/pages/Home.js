import { Grid, Typography } from "@mui/material";

function Home() {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12} backgroundColor="primary"><Typography variant="h1" component="h1">Welcome to WSFight!</Typography></Grid>
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={3} p={2}>
          <Typography variant="h2" component="h2">Getting Started</Typography>
          <Typography variant="body2" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dictum volutpat lectus. Nulla hendrerit suscipit magna, eget
            pharetra ligula lobortis eu. In commodo mauris a erat finibus
            efficitur. Etiam sit amet est dapibus, ultricies dolor vel,
            ultricies nisl. Nulla pretium eleifend sagittis. Nunc eu augue
            at arcu lacinia congue. Nullam suscipit tellus sit amet ipsum
            imperdiet faucibus. Pellentesque lectus nisi, convallis vitae
            massa quis, placerat venenatis ipsum.</Typography>
        </Grid>
        <Grid item xs={3} p={2}>
          <Typography variant="h2" component="h2">Video Tutorial</Typography>
          <Typography variant="body2" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dictum volutpat lectus. Nulla hendrerit suscipit magna, eget
            pharetra ligula lobortis eu. In commodo mauris a erat finibus
            efficitur. Etiam sit amet est dapibus, ultricies dolor vel,
            ultricies nisl. Nulla pretium eleifend sagittis. Nunc eu augue
            at arcu lacinia congue. Nullam suscipit tellus sit amet ipsum
            imperdiet faucibus. Pellentesque lectus nisi, convallis vitae
            massa quis, placerat venenatis ipsum.</Typography>
        </Grid>
        <Grid item xs={3} p={2}>
          <Typography variant="h2" component="h2">Start Playing</Typography>
          <Typography variant="body2" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dictum volutpat lectus. Nulla hendrerit suscipit magna, eget
            pharetra ligula lobortis eu. In commodo mauris a erat finibus
            efficitur. Etiam sit amet est dapibus, ultricies dolor vel,
            ultricies nisl. Nulla pretium eleifend sagittis. Nunc eu augue
            at arcu lacinia congue. Nullam suscipit tellus sit amet ipsum
            imperdiet faucibus. Pellentesque lectus nisi, convallis vitae
            massa quis, placerat venenatis ipsum.</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
