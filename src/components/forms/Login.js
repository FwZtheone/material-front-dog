import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core";
import { Container, Button, TextField } from "@material-ui/core";



const useStyle = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 4em 0 4em'
  },
  title: {
    textAlign: 'center'
  },
  formControl: {
    margin: '1.5em 0 1.5em 0'
  }
})


export const Login = () => {

  const classes = useStyle();
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleSubmit = () => {
    if (email == "" && password == "") {
      setErrorPassword(true);
      setErrorEmail(true);
    }

    else {
      setErrorPassword(false);
      setErrorEmail(false);
    }
  }

  return (
    <form className={classes.container}>

      <Container className={classes.title}>
        <h1>connexion</h1>
      </Container>

      <FormControl className={classes.formControl} error={errorEmail} >
        <InputLabel htmlFor="my-input">Adresse émail</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setEmail(e.target.value)} />

        <FormHelperText id="my-helper-text">
          Ne partagez jamais votre adresse émail.
        </FormHelperText>
      </FormControl>





      <FormControl className={classes.formControl} error={errorPassword} >
        <InputLabel htmlFor="my-input">mot de passe </InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setPassword(e.target.value)} />
        <FormHelperText id="my-helper-text">
          Ne partagez jamais votre mot de passe.
        </FormHelperText>
      </FormControl>

      <Button color="primary" variant="contained"
        className={classes.button}
        size="large"
        onClick={handleSubmit}

      >
        connexion
      </Button>


    </form>
  );
};
