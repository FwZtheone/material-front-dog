import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import dog from "./dog.jpg";
import { Login } from "./components/forms/Login";

const useStyles = makeStyles((theme) => ({
  container_picture: {

    height: "calc(100vh - 3.8px)",
  },
  container_form: {
    display: 'flex',
    height: "100vh",
  },
  picture_home: {
    height: "100%",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6} className={classes.container_picture}>
          <img src={dog} alt="dog" className={classes.picture_home} />
        </Grid>
        <Grid item xs={6} className={classes.container_form}  direction="column" justify="center" >
          <Login />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
